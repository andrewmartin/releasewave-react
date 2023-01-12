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
import { ContentEmbed, ImageElement } from './lib/custom-types';
import { CustomNode, deserialize, serialize } from './util';
import { Input } from '@/components/Atoms/InputField';
import classNames from 'classnames';
import { ImageWithCaption } from '@/components/User/atoms';
import { MdAddToPhotos } from 'react-icons/md';
import { useAppContext } from '@/context/app';
import NextImage from 'next/image';
import { getSearch } from '@/components/Search/page';
import { useArtistContext } from '@/context/artist';
import { useReleaseContext } from '@/context/release';
import atomStyles from '@/styles/Atoms.module.css';
import { usePrevious } from 'react-use';
import { OutsideClick } from '@/hooks/useOutsideAlerter';

const insertImage = (editor: any, url: any, caption?: string) => {
  const image: ImageElement = {
    type: `image`,
    imageUrl: url,
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

const Element = (props: any) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case `image`:
      return <ImageEditorElement alt={element.caption} {...props} />;
    case `contentEmbed:artist`:
    case `contentEmbed:release`:
      return <ContentEmbedEditorElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export const ImagesExample = () => {
  const editor = useMemo<ReactEditor>(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  // const html =
  //   `<p>lorem</p><div data-slate-custom="image" class="editor-image"><img src="/static/placeholder/missing.png" /><cite>Some caption!</cite></div>`.trim();
  const html =
    `<p>this is the test content</p><p></p><div data-slate-custom="contentEmbed:artist" class="editor-content-embed"><a href="/artists/pat-metheny"><img src="/static/placeholder/missing.png" /><cite>Pat Metheny</cite></a></div><div data-slate-custom="image" class="editor-image"><img src="http://localhost:1337///rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1fdfe07a75400a12caf988306cb795bf3b461711/1668232738" /><cite>Some Caption</cite></div><p></p><p>i need to add spaces first</p>`.trim();
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
      value={initialHTML}
    >
      <Toolbar>
        <div className="flex justify-center items-center w-full space-x-2">
          <InsertImageButton />
          <ContentEmbedElement />
        </div>
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
    imageUrl: url,
    children: [{ text: `` }],
  };

  Transforms.setNodes(editor, image, {
    at: path,
  });
};

const ContentEmbedEditorElement: FC<
  PropsWithChildren<{
    attributes: any;
    element: ContentEmbed;
  }>
> = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);
  const [selected, focused] = [useSelected(), useFocused()];
  const { imageUrl: url, name } = element;

  return (
    <div contentEditable={false} className="relative" {...attributes}>
      <span
        onClick={() => {
          Transforms.removeNodes(editor, {
            at: path,
          });
        }}
        className={classNames(`cursor-pointer btn btn-xs absolute top-[2em]`, {
          inline: selected && focused,
          none: !selected || !focused,
        })}
      >
        <Icon>Delete</Icon>
      </span>
      <NextImage src={url} width={100} height={100} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

const ImageEditorElement: FC<
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
    updateImage(editor, element.imageUrl, caption, path);
  };

  return (
    <>
      <div contentEditable={false} {...attributes}>
        {children}
        <div>
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
              className={classNames(
                `cursor-pointer btn btn-xs absolute top-[2em]`,
                {
                  inline: selected && focused,
                  none: !selected || !focused,
                },
              )}
            >
              <Icon>Delete</Icon>
            </span>
            <img
              alt="contentEditable image"
              src={element.imageUrl}
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
    </>
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
          data: {
            contentId: ``, // TODO retrieve from context when actually used
            contentType: `article`,
          },
        });
      }}
    >
      <MdAddToPhotos />
      <span>Image</span>
    </button>
  );
};

const ContentEmbedItem: FC<{
  text: string | null;
  imageSrc?: string;
  type: ContentEmbed['type'];
  onClick: (args: { imageSrc: string; text: string }) => void;
}> = (props) => {
  const { text, imageSrc, onClick } = props;

  return (
    <button
      className="last-of-type:border-none last-of-type:m-0 last-of-type:pb-0 w-full flex items-center mb-2 pb-2 border-b-gray-200 border-b-[1px] hover:opacity-100 opacity-50"
      onClick={() =>
        onClick({
          imageSrc: imageSrc || ``,
          text: text || ``,
        })
      }
    >
      {imageSrc && (
        <NextImage
          width={40}
          height={40}
          alt="image"
          src={imageSrc}
          className="mr-2 border-gray-100 border-2 block max-w-full max-h-[20em]"
        />
      )}
      {text && <h3 className="text-[0.8em] text-left">{text}</h3>}
    </button>
  );
};

const ContentEmbedElement = () => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState(``);
  const editor = useSlateStatic();

  const {
    state: { releases },
    dispatch: dispatchRelease,
  } = useReleaseContext();
  const {
    state: { artists },
    dispatch: dispatchArtist,
  } = useArtistContext();
  const previousSearchValue = usePrevious(searchTerm);

  useEffect(() => {
    if (previousSearchValue !== searchTerm && searchTerm) {
      getSearch(searchTerm, dispatchRelease, dispatchArtist);
    }
  }, [dispatchArtist, dispatchRelease, previousSearchValue, searchTerm]);

  const releasesFound = releases?.items.length;
  const artistsFound = artists?.items.length;
  const hasSearch = searchTerm.length >= 1;

  const insertContent = (
    imageUrl: string,
    href: string,
    contentEmbedType: ContentEmbed['type'],
    text?: string,
  ) => {
    const contentEmbed: ContentEmbed = {
      type: contentEmbedType,
      href,
      imageUrl,
      name: text,
      children: [{ text: `` }],
    };

    Transforms.insertNodes(editor, contentEmbed);
  };

  return (
    <div className={classNames(`relative z-20`)}>
      <button
        className="btn btn-xs btn-secondary flex items-center space-x-2"
        onClick={() => {
          setActive(true);
        }}
      >
        <MdAddToPhotos />
        <span>Embed Artist or Release</span>
      </button>
      {active && (
        <OutsideClick show={active} onClick={() => setActive(false)}>
          <div
            className={classNames(
              `absolute flex flex-col w-full left-0 top-[36px]`,
              {
                [`bg-white p-4 shadow-lg`]: active,
              },
            )}
          >
            <Input
              theme="small"
              type="text"
              placeholder="Search"
              onChange={(event) => {
                const value = event.currentTarget.value;
                setSearchTerm(value);
              }}
            />
            <div className="w-full mt-4 max-h-72 overflow-y-scroll">
              <>
                {!hasSearch && (
                  <p className="opacity-50 mb-6">
                    Search for an artist or release.
                  </p>
                )}
                {hasSearch && (
                  <div className="grid grid-cols-2 grid-gap-1 mb-2">
                    <h2
                      className={classNames(
                        atomStyles.FeaturedTextSmall,
                        `w-full`,
                      )}
                    >
                      Releases
                    </h2>
                    <h2
                      className={classNames(
                        atomStyles.FeaturedTextSmall,
                        `w-full`,
                      )}
                    >
                      Artists
                    </h2>
                  </div>
                )}

                <div className="flex">
                  <div className="w-1/2">
                    {releasesFound ? (
                      releases.items.map((release) => (
                        <ContentEmbedItem
                          type="contentEmbed:release"
                          onClick={(args) => {
                            const { imageSrc, text } = args;
                            insertContent(
                              imageSrc,
                              `/releases/${release.slug}`,
                              `contentEmbed:artist`,
                              text,
                            );
                            // setActive(false);
                          }}
                          key={release.id}
                          text={release.name}
                          imageSrc={release.image.square}
                        />
                      ))
                    ) : hasSearch ? (
                      <p className="text-xxs">No releases found.</p>
                    ) : null}
                  </div>
                  <div className="w-1/2">
                    {artistsFound ? (
                      artists.items.map((artist) => (
                        <ContentEmbedItem
                          type="contentEmbed:artist"
                          key={artist.id}
                          text={artist.name}
                          imageSrc={artist.image.square}
                          onClick={(args) => {
                            const { imageSrc, text } = args;
                            insertContent(
                              imageSrc,
                              `/artists/${artist.slug}`,
                              `contentEmbed:artist`,
                              text,
                            );
                            // setActive(false);
                          }}
                        />
                      ))
                    ) : hasSearch ? (
                      <p className="text-xxs">No artists found.</p>
                    ) : null}
                  </div>
                </div>
              </>
            </div>
          </div>
        </OutsideClick>
      )}
    </div>
  );
};

export default ImagesExample;
