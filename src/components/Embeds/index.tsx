import { Release } from '@/types/Data';
import React, { FC, useEffect, useState } from 'react';
import { Textarea } from '../Atoms/InputField';
import styles from './Embeds.module.css';
import { usePrevious } from 'react-use';

const Embed = (props: Release['embeds'][number]) => {
  return (
    <div
      className={styles.Embed}
      dangerouslySetInnerHTML={{
        __html: props.content ? `${props.content}` : ``,
      }}
    ></div>
  );
};

interface EmbedsProps {
  embeds: Release['embeds'];
}

export const Embeds: FC<EmbedsProps> = ({ embeds }) => {
  if (!embeds.filter((embed) => embed.content !== `` && embed.content).length) {
    return null;
  }

  return (
    <div className="md:grid md:grid-cols-2 gap-2">
      {embeds.map((embed) => {
        return <Embed {...embed} key={embed.id} />;
      })}
    </div>
  );
};

export const EmbedField: FC<{
  onChange: (values: { content: string | null; idx: number }[]) => void;
  embeds: Release['embeds'];
}> = ({ onChange, embeds }) => {
  const embedContent = embeds.map(({ content }, idx) => {
    return {
      content,
      idx,
    };
  });

  const [currentEmbeds, setCurrentEmbeds] = useState(embedContent);
  const [hasTouched, setHasTouched] = useState(false);
  const previousEmbeds = usePrevious(currentEmbeds);

  useEffect(() => {
    if (previousEmbeds !== currentEmbeds && currentEmbeds && hasTouched) {
      onChange(currentEmbeds);
    }
  }, [currentEmbeds, hasTouched, onChange, previousEmbeds]);

  return (
    <div>
      {currentEmbeds.map((embed, idx) => {
        return (
          <div
            key={`embed-${idx}`}
            className="flex items-center justify-center mb-6"
          >
            <Textarea
              value={embed.content || ``}
              onChange={(event) => {
                const newEmbed = {
                  ...currentEmbeds[idx],
                  content: event.currentTarget.value,
                };

                const newEmbeds = currentEmbeds.concat();
                newEmbeds[idx] = newEmbed;
                setCurrentEmbeds(newEmbeds);
                setHasTouched(true);
              }}
            />
            <button
              onClick={() => {
                const newEmbeds = currentEmbeds.concat();
                const index = newEmbeds.findIndex((embed) => embed.idx === idx);
                if (index) {
                  newEmbeds.splice(index, 1);
                }
                setCurrentEmbeds(newEmbeds);
                setHasTouched(true);
              }}
              type="button"
              className="btn btn-secondary"
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          const newEmbeds = currentEmbeds.concat();
          newEmbeds.push({
            idx: Math.floor(Math.random() * 10000),
            content: ``,
          });
          setCurrentEmbeds(newEmbeds);
          setHasTouched(true);
        }}
        type="button"
        className="btn btn-secondary"
      >
        Add
      </button>
    </div>
  );
};
