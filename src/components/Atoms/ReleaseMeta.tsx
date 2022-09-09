import { Release } from '@/types/Data';
import React, { FC } from 'react';
import atomStyles from '@/styles/Atoms.module.css';
import { formatDate } from '@/util/date';
import { PictureImage } from '../Image';
import classNames from 'classnames';

export const ReleaseDate = ({ release_date }: Release) => {
  if (!release_date) {
    return null;
  }

  return (
    <cite className={atomStyles.ReleaseDate}>{formatDate(release_date)}</cite>
  );
};

export interface ReleaseFeaturedBanner extends Release {
  type?: 'small' | 'default';
}

export const ReleaseFeaturedBanner: FC<ReleaseFeaturedBanner> = ({
  type = `default`,
  featured,
}) => {
  if (!featured) {
    return null;
  }
  return (
    <span
      className={classNames(`${atomStyles.FeaturedText} box-item`, {
        [atomStyles.FeaturedTextSmall]: type === `small`,
        [atomStyles.FeaturedTextDefault]: type === `small`,
      })}
    >
      <span>Featured</span>
    </span>
  );
};

interface ReleaseContent {
  content: string | null;
  trim?: number;
  className?: string;
}

export const ReleaseContent: FC<ReleaseContent> = ({
  content,
  className,
  trim,
}) => {
  if (!content) {
    return null;
  }

  let contentToRender = trim ? content.slice(0, trim) : content;

  if (contentToRender.length === trim) {
    contentToRender = `${contentToRender} ...`;
  }

  return (
    <div
      className={className || atomStyles.ReleaseContent}
      dangerouslySetInnerHTML={{
        __html: contentToRender ? `${contentToRender}` : ``,
      }}
    ></div>
  );
};

interface Avatar {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isGrayscale?: boolean;
}

export const Avatar: FC<Avatar> = ({
  src,
  alt,
  width = 100,
  height = 100,
  isGrayscale = true,
}) => {
  return (
    <div
      className={classNames(`relative flex items-center justify-center`, {
        grayscale: isGrayscale,
      })}
      style={{
        width,
        height,
      }}
    >
      <PictureImage src={src} alt={alt} />
    </div>
  );
};
