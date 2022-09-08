import { assertUnreachable } from './unreachable';

export const COOKIE_PREFIX = `__RW`;

const CONFIRM_TEXT = {
  UNSAVED: `Are you sure? You will lose any unsaved changes!`,
  NO_UNDO: `Are you sure? There is no undo!`,
};

export const CONFIRM = (type: keyof typeof CONFIRM_TEXT = `UNSAVED`) => {
  const getReturnType = () => {
    switch (type) {
      case `NO_UNDO`:
      case `UNSAVED`:
        return CONFIRM_TEXT[type];
      case undefined:
        return;
      default:
        return assertUnreachable(type);
    }
  };

  const confirmText = getReturnType();

  return window?.confirm(confirmText);
};

export const DEFAULT_RICH_TEXT_EDITOR_COPY = `<p>Write something here.</p>`;

export const VALIDATIONS = {
  REQUIRED: (name: string) => `${name} is a required field.`,
  CHANGE_FROM_DEFAULT: (name: string, value: string) =>
    `${name} can't be ${value}...`,
  SCORE: (name: string) => `${name} must be between 0 and 10.`,
  CANNOT_EMPTY: (name: string) =>
    `${name} must have at least one item selected.`,
};
