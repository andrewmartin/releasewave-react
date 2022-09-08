import classNames from 'classnames';
import React from 'react';

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const { className, ...restProps } = props;

  return (
    <input
      className={classNames(
        `w-full border-gray-200 border-spacing-2 border-2`,
        {
          className: Boolean(className),
        },
      )}
      type="text"
      {...restProps}
    />
  );
};

export const Textarea = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
) => {
  const { className, ...restProps } = props;

  return (
    <textarea
      className={classNames(
        `w-full border-gray-200 border-spacing-2 border-2`,
        {
          className: Boolean(className),
        },
      )}
      {...restProps}
    />
  );
};
