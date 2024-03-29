import { Release } from '@/types/Data';
import React, { FC } from 'react';
import Image from 'next/legacy/image';
import { FirstArtistForRelease } from '../Atoms/FirstArtistForRelease';
import styles from './Release.module.css';
import Link from 'next/link';
import { appendHostToImage } from '@/util/image';
import atomStyles from '@/styles/Atoms.module.css';
import {
  ReleaseContent,
  ReleaseDate,
  ReleaseFeaturedBanner,
} from '../Atoms/ReleaseMeta';
import { ItemWrapper } from '@/types/Components';
interface ReleaseItem extends Release, ItemWrapper, ReleaseFeaturedBanner {
  showArtist?: boolean;
  href?: string;
  showReadMore?: boolean;
}

export const ReleaseItem: FC<ReleaseItem> = (props) => {
  const {
    imageProps = {
      width: 500,
      height: 500,
    },
    showArtist = true,
    href,
    classNames,
    Content,
    showContentDefault,
    showReadMore,
    ...release
  } = props;

  const linkHref = href || `/releases/${release.slug}`;
  const container = classNames?.container || styles.ReleaseItem;
  const image = classNames?.image || styles.ReleaseItemImage;
  const content = classNames?.content || styles.ReleaseItemContent;

  return (
    <div className={container} key={release.id}>
      <div
        className={`${image} cursor-pointer hover:scale-110 transition-all transform-gpu`}
      >
        <ReleaseFeaturedBanner {...release} />
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(release.image.large)}
            alt={`${release.name}`}
            {...imageProps}
          />
        </Link>
      </div>
      <div className={content}>
        <Link href={linkHref}>
          <h2 className={atomStyles.ReleaseLink}>{release.name}</h2>
        </Link>
        {showArtist && <FirstArtistForRelease {...release} />}
        <ReleaseDate {...release} />
        {Content && !showContentDefault && Content}
        {showContentDefault && (
          <ReleaseContent
            className={styles.ReleaseCollectionItemDescription}
            content={
              release.description ? `${release.description.slice(0, 300)}` : ``
            }
          />
        )}
        {showReadMore && (
          <div className="mt-8 w-full">
            <Link href={linkHref} className="btn btn-sm btn-secondary">
              Read More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
