import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export const INPUT_BASE_STYLES = `w-full text-base border-gray-200 border-spacing-2 border-2 px-6 py-4 leading-8`;

const INPUT_THEMES = {
  small: `w-full text-sm border-gray-200 border-spacing-1 border-2 px-3 py-2 leading-1`,
};

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    theme?: keyof typeof INPUT_THEMES;
  },
) => {
  const { className, theme, ...restProps } = props;

  return (
    <input
      className={classNames({
        [INPUT_BASE_STYLES]: !theme,
        [`${className}`]: Boolean(className),
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
        [`${className}`]: className,
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

export const Select = (
  props: PropsWithChildren<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  >,
) => {
  const { children, className, ...restProps } = props;

  return (
    <select
      className={classNames(INPUT_BASE_STYLES, `p-6 w-full`, {
        [`${className}`]: Boolean(className),
      })}
      {...restProps}
    >
      {children}
    </select>
  );
};
