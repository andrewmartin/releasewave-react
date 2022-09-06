import { useAppContext } from '@/context/app';
import { useReleaseContext } from '@/context/release';
import React from 'react';
import { LayoutProps } from '../Layout';

interface DebugProps {
  layoutProps: LayoutProps;
}

export const Debug = (props: DebugProps) => {
  const {
    layoutProps: { children, ...restLayoutProps },
  } = props;

  const { state } = useAppContext();
  const { state: releaseState } = useReleaseContext();

  console.log(`restLayoutProps`, restLayoutProps);

  return (
    <div className="p-8 bg-white overflow-y-scroll">
      <h3>Debug: AppContext State</h3>
      <code>{JSON.stringify(state)}</code>

      <h3>Debug: ReleaseContext State</h3>
      <code>{JSON.stringify(releaseState)}</code>

      <h3>Debug: LayoutProps</h3>
      <pre>See console.</pre>
    </div>
  );
};
