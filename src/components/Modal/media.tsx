'use client';

import { useAppContext } from '@/context/app';
import { RailsCollectionResponse } from '@/types/Data';
import React, { FC, PropsWithChildren, use, useEffect, useState } from 'react';
import { Transforms } from 'slate';
import {
  CustomEditor,
  ImageElement,
} from '../Forms/Fields/RichTextField/lib/custom-types';
import Image from 'next/image';
import { Pagination } from '../Pagination';
import { AXIOS } from '@/api/axios';
import { CreateMediaForm } from '../Forms/Media/createModal';
import styles from './Modal.module.css';

const insertImage = (editor: CustomEditor, url: string, caption?: string) => {
  const image: ImageElement = {
    type: `image`,
    url,
    caption: `${caption}`,
    children: [{ text: `` }],
  };
  Transforms.insertNodes(editor, image);
};

type MediaResponse = RailsCollectionResponse<schema.Medium>;

async function getMedia(
  params = {},
  callback: (data: MediaResponse) => void,
): Promise<void> {
  // const data = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_ROOT}media.json`,
  // ).then((res) => res.json());
  const { data } = await AXIOS().instance.get<MediaResponse>(`media`, {
    params,
  });

  callback(data);
}

async function deleteMedia(
  id: schema.Medium['id'],
  callback: (data: MediaResponse) => void,
): Promise<void> {
  // const data = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_ROOT}media.json`,
  // ).then((res) => res.json());
  const { data } = await AXIOS().instance.delete<MediaResponse>(`media/${id}`);

  callback(data);
}

export const MediaModal: FC<PropsWithChildren> = () => {
  const {
    dispatch,
    state: { editor },
  } = useAppContext();

  const [isCreating, setCreating] = useState(false);
  const [params, setParams] = useState({});
  const [media, setMedia] = useState<MediaResponse>();

  // const data2 = use(getMedia({}, (data: MediaResponse) => setMedia(data)));
  // console.log(`data2`, data2);

  useEffect(() => {
    if (!media) {
      getMedia(params, (data: MediaResponse) => setMedia(data));
    }
  }, [media, params]);

  const onSelectPage = (pageNumber: number) => {
    setParams({
      page: pageNumber,
    });
  };

  if (!editor) return null;

  const onCreateMedia = (newMediaItem: schema.Medium) => {
    setMedia({
      per_page: media?.per_page || 30,
      total_entries: media?.total_entries || 0,
      current_page: media?.current_page || 0,
      items: media?.items ? [newMediaItem, ...media.items] : [newMediaItem],
    });
  };

  const onDeleteMedia = (id: schema.Medium['id']) => {
    setMedia({
      per_page: media?.per_page || 30,
      total_entries: media?.total_entries || 0,
      current_page: media?.current_page || 0,
      items: media?.items.filter((i) => i.id !== id) || [],
    });
  };

  const onSelectImage = (url: string, caption: string) => {
    dispatch({
      type: `modal:close`,
    });
    insertImage(editor, url, caption);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-start">
        <div className="flex-1">
          <h2
            className="text-2xl md:!text-3xl font-bold tracking-[-0.045em] mb-12
      border-b-2 border-b-gray-300 inline-block leading-[1]"
          >
            Media
          </h2>
        </div>
        <button
          onClick={() => setCreating(true)}
          className="btn btn-primary btn-sm"
        >
          Create new Image
        </button>
      </div>

      {isCreating && <CreateMediaForm onSubmit={onCreateMedia} />}

      <div className="mt-6 grid grid-cols-3 md:grid md:grid-cols-3 md:gap-12">
        {media?.items.map((media) => {
          const { id, width, height, url, caption } = media;
          const fullUrl = `${process.env.NEXT_PUBLIC_API_ROOT?.replace(
            `/api/v1`,
            `/`,
          )}${url}`;

          return (
            <div className={styles.MediaItem} key={id}>
              <Image
                alt={`image`}
                src={fullUrl}
                width={width}
                height={height}
                className="mb-2"
              />
              <cite>{caption}</cite>
              <div className={styles.MediaItemActions}>
                <button
                  onClick={() => onSelectImage(fullUrl, caption)}
                  className="btn btn-xs btn-primary "
                >
                  Select
                </button>
                <button
                  onClick={() => {
                    const confirm = window.confirm(
                      `Are you sure? There is no undo.`,
                    );
                    confirm &&
                      deleteMedia(id, () => {
                        onDeleteMedia(id);
                      });
                  }}
                  className="btn btn-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {media && (
        <Pagination
          per_page={media.per_page}
          total_entries={media.total_entries}
          current_page={media.current_page}
          onSelectPage={onSelectPage}
        />
      )}
    </div>
  );
};
