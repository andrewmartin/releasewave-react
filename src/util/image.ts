export const appendHostToImage = (imageUrl: string) => {
  if (imageUrl.includes(`s3-us-west-2.amazonaws.com`)) {
    return `https:${imageUrl}`;
  }

  return imageUrl;
};
