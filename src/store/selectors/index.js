export const getPage = ({
  data: { page, isFetchingPages },
  router: {
    location: { pathname },
  },
}) => {
  let pageData = null;
  let pageChildren = [];
  const currentPage = page[pathname];

  if (currentPage && currentPage.fields) {
    pageData = currentPage.fields;
    if (pageData && pageData.children) {
      const children = pageData.children.map(({ fields: { slug } }) => slug).filter(n => n);
      if (children.length) {
        pageChildren = children.map(slug => page[slug].fields);
      }
    }
  }

  return {
    isFetchingPages,
    pathname,
    page: pageData,
    children: pageChildren,
  };
};
