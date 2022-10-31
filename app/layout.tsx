import { FC, PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  console.log(`RootLayout props:`, props);

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
