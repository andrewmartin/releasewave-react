export const isServer = () => typeof document === `undefined`;
export const isBrowser = () => !isServer();
