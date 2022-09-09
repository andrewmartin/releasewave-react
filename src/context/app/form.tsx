/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, Fragment, PropsWithChildren, ReactNode } from 'react';
import { useIsLoggedIn } from '@/hooks/user';
import { FormikValues, useFormik } from 'formik';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { sentenceCase } from 'change-case';
import classNames from 'classnames';
import { FormikErrors } from '@/components/Atoms/Errors';
interface FormContext {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

const FormContext = createContext<FormContext>({
  isEditing: false,
  setIsEditing: () => {},
});

export const useFormContext = () => useContext(FormContext);

interface FormFooterProps {
  actionName: string;
  isFixed?: boolean;
  AdditionalActions?: JSX.Element;
  ServerErrors?: JSX.Element;
}

const Wrapper: FC<PropsWithChildren<Omit<FormFooterProps, 'actionName'>>> = ({
  children,
  isFixed,
}) => (
  <div
    className={classNames(
      ` w-full p-6 text-right flex items-end justify-end space-x-2 bg-white border-t-2 border-gray-200 mt-12 flex-wrap`,
      {
        'fixed bottom-0 right-0 z-40 shadow-inner': isFixed,
      },
    )}
  >
    {children}
  </div>
);

export const FormFooter: FC<FormFooterProps> = (props) => {
  const { AdditionalActions, actionName, isFixed, ServerErrors } = props;
  const { isEditing, setIsEditing } = useFormContext();

  if (!isEditing) {
    return (
      <Wrapper isFixed={isFixed}>
        {AdditionalActions}
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setIsEditing(true);
          }}
          className="btn btn-primary"
        >
          {actionName}
        </button>
      </Wrapper>
    );
  }

  return (
    <Wrapper isFixed={isFixed}>
      {ServerErrors}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        onClick={() => {
          setIsEditing(false);
        }}
        type="submit"
        className="btn btn-secondary"
      >
        Cancel
      </button>
    </Wrapper>
  );
};

interface FormProviderProps {
  initInEditMode?: boolean;
  children: ReactNode;
}

export function FormProvider(props: FormProviderProps) {
  const { children, initInEditMode } = props;
  const [isEditing, setIsEditing] = useState(Boolean(initInEditMode));
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return (
      <FormContext.Provider value={{ isEditing, setIsEditing }}>
        {children}
      </FormContext.Provider>
    );
  }

  return <Fragment>{children}</Fragment>;
}

// form field wrappers
interface MaybeField<Values extends FormikValues = FormikValues> {
  value: string | null | undefined;
  name: string;
  formik: ReturnType<typeof useFormik<Values>>;
  children: ReactNode;
  element: JSX.Element | null;
  className?: string;
  customLabel?: string;
}

export function MaybeField<T extends FormikValues = FormikValues>(
  props: MaybeField<T>,
) {
  const { children, element, name, className, customLabel } = props;
  const { isEditing } = useFormContext();

  if (isEditing) {
    return (
      <div
        className={classNames({
          [`flex flex-wrap w-full mb-4`]: !className,
          [`${className}`]: className,
        })}
      >
        <label className="uppercase text-sm w-full not-italic font-semibold">
          {sentenceCase(customLabel || name)}
        </label>
        <div
          className={classNames({
            'w-full': !className,
            [`${className}`]: className,
          })}
        >
          {children}
        </div>
        <FormikErrors formik={props.formik} name={name} />
      </div>
    );
  }

  if (className) {
    return <div className={className}>{element}</div>;
  }

  return element;
}

type MaybeEmbedField<Values extends FormikValues = FormikValues> = Omit<
  MaybeField<Values>,
  'value'
>;

export function MaybeEmbedField<T extends FormikValues = FormikValues>(
  props: MaybeEmbedField<T>,
) {
  const { children, element, name, className } = props;
  const { isEditing } = useFormContext();

  if (isEditing) {
    return (
      <div
        className={classNames({
          [`flex flex-wrap w-full mb-4`]: !className,
          [`${className}`]: className,
        })}
      >
        <label className="uppercase text-sm w-full not-italic font-semibold">
          {sentenceCase(name)}
        </label>
        <div
          className={classNames({
            'w-full': !className,
            [`${className}`]: className,
          })}
        >
          {children}
        </div>
        <FormikErrors formik={props.formik} name={name} />
      </div>
    );
  }

  if (className) {
    return <div className={className}>{element}</div>;
  }

  return element;
}

interface MaybeForm {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  Footer: JSX.Element;
  className?: string;
}

export const MaybeForm: FC<PropsWithChildren<MaybeForm>> = (props) => {
  const { handleSubmit, children, Footer, className } = props;
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return (
      <form className={className} onSubmit={handleSubmit}>
        {children}
        {Footer}
      </form>
    );
  }

  return <div>{children}</div>;
};
