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

export const FormSubmitButton = () => {
  const { isEditing, setIsEditing } = useFormContext();

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className="w-full p-6 text-right">{children}</div>
  );

  if (!isEditing) {
    return (
      <Wrapper>
        <button onClick={() => setIsEditing(true)} className="btn btn-primary">
          Edit
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
        onClick={() => setIsEditing(false)}
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
}

export function MaybeField<T extends FormikValues = FormikValues>(
  props: MaybeField<T>,
) {
  const {
    children,
    formik: { values },
    element,
    name,
  } = props;
  const { isEditing } = useFormContext();
  if (isEditing) {
    return (
      <div className="flex flex-wrap w-full mb-4">
        <label className="uppercase text-sm w-full not-italic">
          {sentenceCase(name)}
        </label>
        <div className="w-full">{children}</div>
      </div>
    );
  }

  return element;
}

interface MaybeForm {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const MaybeForm: FC<PropsWithChildren<MaybeForm>> = (props) => {
  const { handleSubmit, children } = props;
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return (
      <form onSubmit={handleSubmit}>
        {children}
        <FormSubmitButton />
      </form>
    );
  }

  return <div>{children}</div>;
};
