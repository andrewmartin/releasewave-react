import React from 'react';
import { useReleaseContext } from '@/context/release';
import { onDeleteRelease } from '@/context/release/api';
import { WithCurrentUser } from '@/hooks/user';
import { Review, User } from '@/types/Data';
import { PropsWithChildren } from 'react';
import styles from './ReviewItem.module.css';
import { highlightScore, modifyScore } from '@/util/forms';
import classNames from 'classnames';
import { useAppContext } from '@/context/app';
import { Avatar, ReleaseContent } from '@/components/Atoms/ReleaseMeta';

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
    <div className={classNames(styles.ReviewItemContent, `box-item`)}>
      <div className={styles.ReviewItemHeadline}>
        <h2>{name}</h2>
        {score && (
          <span
            className={classNames({
              [`${styles.ReviewItemHighScore}`]: highlightScore(score),
            })}
          >
            {scoreValue}
          </span>
        )}
      </div>
      <ReleaseContent content={content} />
      {children}
      {user.name && user.image && (
        <div className={styles.ReviewItemByline}>
          <cite>By {user.name}</cite>
          <Avatar
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
  const { state, dispatch: dispatchRelease } = useReleaseContext();
  const { dispatch: appDispatch } = useAppContext();
  const { id, name, content, user_id, score } = review;

  const onDelete = async (id: number) => {
    await onDeleteRelease(dispatchRelease, appDispatch)(
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
        <div className="flex space-x-2">
          <button onClick={() => onDelete(id)} className="btn btn-secondary">
            Delete
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatchRelease({
                type: `setEditingReview`,
                review,
              });
            }}
            className="btn btn-secondary"
          >
            Edit
          </button>
        </div>
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
    <div className="max-w-[85%] w-full ml-auto mr-auto mt-16">
      {reviews.map((review) => {
        return <ReviewItem {...review} key={review.id} />;
      })}
    </div>
  );
};
