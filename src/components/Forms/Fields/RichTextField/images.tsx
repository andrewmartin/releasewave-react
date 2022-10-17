/* eslint-disable @next/next/no-img-element */
import React, { FC, PropsWithChildren, useMemo, useState } from 'react';
import imageExtensions from 'image-extensions';
import isUrl from 'is-url';
import { Transforms, createEditor, Descendant, Path } from 'slate';
import {
  Slate,
  Editable,
  useSlateStatic,
  useSelected,
  useFocused,
  withReact,
  ReactEditor,
} from 'slate-react';
import { withHistory } from 'slate-history';
import { css, cx } from '@emotion/css';
import { Node as SlateNode } from 'slate';
import { Button, Icon, Toolbar } from './lib/components';
import { ImageElement } from './lib/custom-types';
import { CustomNode, serialize } from './util';
import { Input } from '@/components/Atoms/InputField';
import classNames from 'classnames';

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === `image` ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData(`text/plain`);
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split(`/`);

        if (mime === `image`) {
          reader.addEventListener(`load`, () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export const ImagesExample = () => {
  const editor = useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  return (
    <Slate
      onChange={(value) => {
        console.log(`value`, value);
        const serializedHTML = serialize(value as any as CustomNode[]);
        console.log(`serializedHTML`, serializedHTML);
      }}
      editor={editor}
      value={initialValue}
    >
      <Toolbar>
        <InsertImageButton />
      </Toolbar>
      <Editable
        renderElement={(props) => <Element {...props} />}
        placeholder="Enter some text..."
      />
    </Slate>
  );
};

const insertImage = (editor, url, caption: string) => {
  const text = { text: `` };
  const image: ImageElement = {
    type: `image`,
    url,
    children: [text],
    caption,
  };
  Transforms.insertNodes(editor, image);
};
const updateImage = (editor, url: string, caption: string, path: Path) => {
  const text = { text: caption || `` };
  const image: ImageElement = {
    type: `image`,
    caption,
    url,
    children: [text],
  };

  console.log(`image`, image);
  console.log(`path`, path);

  Transforms.setNodes(editor, image, {
    at: path,
  });
};

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case `image`:
      return <Image {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Image: FC<
  PropsWithChildren<{
    attributes: any;
    element: ImageElement;
  }>
> = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);
  const [caption, setCaption] = useState(element.caption || ``);

  const selected = useSelected();
  const focused = useFocused();

  const updateCaption = (caption: string) => {
    setCaption(caption);
    updateImage(editor, element.url, caption, path);
  };

  return (
    <div {...attributes}>
      {children}
      <div contentEditable={false} className="relative">
        <img
          alt="contentEditable image"
          src={element.url}
          className={classNames(`block max-w-full max-h-[20em]`, {
            'shadow-md': selected && focused,
          })}
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={classNames(`absolute top-[0.5em] left-[0.5em] bg-white`, {
            inline: selected && focused,
            none: !selected || !focused,
          })}
        >
          <Icon>delete</Icon>
        </Button>
        {selected && (
          <Input
            onChange={(event) => updateCaption(event.currentTarget.value)}
            type="text"
            value={caption}
          />
        )}
        {!selected && <div>{element.caption}</div>}
      </div>
    </div>
  );
};

const InsertImageButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt(`Enter the URL of the image:`);
        if (url && !isImageUrl(url)) {
          alert(`URL is not an image`);
          return;
        }
        url && insertImage(editor, url);
      }}
    >
      <Icon>image</Icon>
    </Button>
  );
};

const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(`.`).pop();
  return imageExtensions.includes(ext);
};

const initialValue: Descendant[] = [
  {
    type: `paragraph`,
    children: [
      {
        text: `In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.`,
      },
    ],
  },
  {
    type: `image`,
    /* url: `https://source.unsplash.com/kFrdX5IeQzI`, */
    url: `/static/placeholder/missing.png`,
    children: [{ text: `` }],
    caption: `Some caption`,
  },
  {
    type: `paragraph`,
    children: [
      {
        text: `This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!`,
      },
    ],
  },
  {
    type: `paragraph`,
    children: [
      {
        text: `You can delete images with the cross in the top left. Try deleting this sheep:`,
      },
    ],
  },
  {
    type: `image`,
    /* url: `https://source.unsplash.com/zOwZKwZOZq8`, */
    url: `/static/placeholder/missing.png`,
    children: [{ text: `` }],
    caption: `Some caption`,
  },
];

export default ImagesExample;
