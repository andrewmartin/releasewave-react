import React from 'react';
import { useReleaseContext } from '@/context/release';
import { onDeleteRelease } from '@/context/release/api';
import { WithCurrentUser } from '@/hooks/user';
import { Review, User } from '@/types/Data';
import { PropsWithChildren } from 'react';
import styles from './ReviewItem.module.css';
import { modifyScore } from '@/util/forms';
import classNames from 'classnames';
import Image from 'next/image';

interface ReviewItemContent extends PropsWithChildren {
  content: string;
  name: string;
  score?: string;
  user: User;
}

export const ReviewItemContent = (props: ReviewItemContent) => {
  const { children, content, name, score, user } = props;

  let scoreValue;
  if (score) {
    scoreValue = modifyScore(score);
  }

  return (
    <div className={styles.ReviewItemContent}>
      <div className={styles.ReviewItemHeadline}>
        <h2>{name}</h2>
        {score && (
          <span
            className={classNames({
              [`${styles.ReviewItemHighScore}`]: parseInt(score) > 8.5,
            })}
          >
            {scoreValue}
          </span>
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: content ? `${content}` : ``,
        }}
      ></div>
      {children}
      {user.name && user.image && (
        <div className={styles.ReviewItemByline}>
          <cite>By {user.name}</cite>
          <Image
            alt={`${user.name} image`}
            width={75}
            height={75}
            src={user.image}
          />
        </div>
      )}
    </div>
  );
};

const ReviewItem = (review: Review) => {
  const { state, dispatch } = useReleaseContext();
  const { id, name, content, user_id, score } = review;

  const onDelete = async (id: number) => {
    await onDeleteRelease(dispatch)(
      {
        id,
        releaseSlug: state?.release?.slug as string,
      },
      () => {
        console.log(`deleted`);
      },
    );
  };

  return (
    <ReviewItemContent
      user={review.user}
      content={content!}
      name={name!}
      score={score!}
    >
      <WithCurrentUser userId={user_id || undefined}>
        <button onClick={() => onDelete(id)} className="btn btn-secondary">
          Delete
        </button>
      </WithCurrentUser>
    </ReviewItemContent>
  );
};

export const Reviews = () => {
  const { state } = useReleaseContext();

  if (!state.reviews) {
    return null;
  }

  const { items: reviews } = state.reviews;

  return (
    <div className="max-w-[80%] w-full m-auto">
      {reviews.map((review) => {
        return <ReviewItem {...review} key={review.id} />;
      })}
    </div>
  );
};
