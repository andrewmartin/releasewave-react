/* eslint-disable @next/next/no-img-element */
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import { Icon, Toolbar } from './lib/components';
import { ImageElement } from './lib/custom-types';
import { CustomNode, deserialize, serialize } from './util';
import { Input } from '@/components/Atoms/InputField';
import classNames from 'classnames';
import { ImageWithCaption } from '@/components/User/atoms';
import { MdAddToPhotos } from 'react-icons/md';
import { useAppContext } from '@/context/app';

const insertImage = (editor: any, url: any, caption?: string) => {
  const image: ImageElement = {
    type: `image`,
    url,
    caption: `${caption}`,
    children: [{ text: `` }],
  };
  Transforms.insertNodes(editor, image);
};

const withImages = (editor: any) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element: any) => {
    return element.type === `image` ? true : isVoid(element);
  };

  editor.insertData = (data: any) => {
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
  const editor = useMemo<ReactEditor>(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  const html =
    `<p>lorem</p><div class="editor-image"><img src="/static/placeholder/missing.png" /><cite>Some caption!</cite></div>`.trim();
  const [initialHTML, setInitialHTML] = useState<Descendant[]>();

  useEffect(() => {
    const document = new DOMParser().parseFromString(html, `text/html`);
    const slateValues = deserialize(document.body);
    console.log(`slateValues`, slateValues);
    setInitialHTML(slateValues);
  }, [html]);

  if (!initialHTML) {
    return null;
  }

  return (
    <Slate
      onChange={(value) => {
        // console.log(`Slate onChange value:`, value);
        const serializedHTML = serialize(value as any as CustomNode[]);
        console.log(`Slate onChange serializedHTML`, serializedHTML);
      }}
      editor={editor}
      value={initialValue}
    >
      <Toolbar>
        <InsertImageButton />
      </Toolbar>
      <div className="w-full p-6 border-2 border-dashed mb-12">
        <Editable
          renderElement={(props) => <Element {...props} />}
          placeholder="Enter some text..."
        />
      </div>
    </Slate>
  );
};

const updateImage = (editor: any, url: string, caption: string, path: Path) => {
  const image: ImageElement = {
    type: `image`,
    caption,
    url,
    children: [{ text: `` }],
  };

  Transforms.setNodes(editor, image, {
    at: path,
  });
};

const Element = (props: any) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case `image`:
      return <Image alt={element.caption} {...props} />;
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

  const [selected, focused] = [useSelected(), useFocused()];

  const updateCaption = (caption: string) => {
    setCaption(caption);
    updateImage(editor, element.url, caption, path);
  };

  return (
    <div {...attributes}>
      {children}
      <div contentEditable={false}>
        <ImageWithCaption
          className="relative"
          caption={!selected && <>{element.caption}</>}
        >
          <span
            onClick={() => {
              Transforms.removeNodes(editor, {
                at: path,
              });
            }}
            className={classNames(`btn btn-xs absolute top-[2em]`, {
              inline: selected && focused,
              none: !selected || !focused,
            })}
          >
            <Icon>Delete</Icon>
          </span>
          <img
            alt="contentEditable image"
            src={element.url}
            className={classNames(`shadow-md block max-w-full max-h-[20em]`, {
              'shadow-md': selected && focused,
            })}
          />

          {selected && (
            <Input
              onChange={(event) => updateCaption(event.currentTarget.value)}
              type="text"
              value={caption}
              className="w-1/2 mx-auto my-4 text-xs"
            />
          )}
        </ImageWithCaption>
      </div>
    </div>
  );
};

const isImageUrl = (url?: string) => {
  if (!url) {
    return false;
  }
  if (!isUrl(url)) {
    return false;
  }
  const ext = new URL(url).pathname.split(`.`).pop();
  return imageExtensions.includes(`${ext}`);
};

const InsertImageButton = () => {
  const editor = useSlateStatic();
  const { dispatch } = useAppContext();
  return (
    <button
      className="btn btn-xs btn-secondary flex items-center space-x-2"
      onClick={(event: any) => {
        event.preventDefault();
        // const url = window.prompt(`Enter the URL of the image:`);
        // if (url && !isImageUrl(url)) {
        //   alert(`URL is not an image`);
        //   return;
        // }
        // url && insertImage(editor, url, `caption`);
        dispatch({
          type: `setSlateEditor`,
          editor,
        });
        dispatch({
          type: `modal:show`,
          modal: `media`,
        });
      }}
    >
      <MdAddToPhotos />
      <span>Image</span>
    </button>
  );
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
    caption: `Some caption`,
    children: [
      {
        text: ``,
      },
    ],
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
    caption: `Some caption`,
    children: [
      {
        text: ``,
      },
    ],
  },
];

export default ImagesExample;
