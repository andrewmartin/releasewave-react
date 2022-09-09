import classNames from 'classnames';
import React from 'react';

export const INPUT_BASE_STYLES = `w-full text-base border-gray-200 border-spacing-2 border-2 p-6 leading-8`;

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const { className, ...restProps } = props;

  return (
    <input
      className={classNames(INPUT_BASE_STYLES, {
        className: Boolean(className),
      })}
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
      className={classNames(INPUT_BASE_STYLES, {
        className: Boolean(className),
      })}
      {...restProps}
    />
  );
};

export const Checkbox = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const { className, ...restProps } = props;

  return (
    <input
      className={classNames(`p-6`, {
        className: Boolean(className),
      })}
      type="checkbox"
      {...restProps}
    />
  );
};
