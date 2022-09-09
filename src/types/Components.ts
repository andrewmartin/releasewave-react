export interface ItemWrapper {
  classNames?: Partial<{
    container: string;
    image: string;
    content: string;
  }>;
  Content?: JSX.Element;
  showContentDefault?: boolean;
  imageProps?: {
    width: number;
    height: number;
  };
}
