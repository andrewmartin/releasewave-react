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

interface FormProviderProps {
  children: ReactNode;
}

const FormContext = createContext<FormContext>({
  isEditing: false,
  setIsEditing: () => {},
});

export const useFormContext = () => useContext(FormContext);

interface FormFooterProps {
  actionName: string;
  AdditionalActions?: JSX.Element;
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full p-6 text-right flex items-end justify-end space-x-2">
    {children}
  </div>
);

export const FormFooter = ({
  AdditionalActions,
  actionName,
}: FormFooterProps) => {
  const { isEditing, setIsEditing } = useFormContext();

  if (!isEditing) {
    return (
      <Wrapper>
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
    <Wrapper>
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

export function FormProvider(props: FormProviderProps) {
  const { children } = props;
  const [isEditing, setIsEditing] = useState(false);
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
}

export function MaybeField<T extends FormikValues = FormikValues>(
  props: MaybeField<T>,
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
