import escapeHtml from 'escape-html';
import { Element } from 'slate';
import { jsx } from 'slate-hyperscript';

// https://codesandbox.io/s/slate-plugins-reproductions-yxr3q?file=/index.tsx
export const deserialize = (el: any, markAttributes = {}): any => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx(`text`, markAttributes, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const nodeAttributes: any = { ...markAttributes };

  // define attributes for text nodes
  switch (el.nodeName) {
    case `strong`:
      nodeAttributes.bold = true;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserialize(node, nodeAttributes))
    .flat();

  if (children.length === 0) {
    children.push(jsx(`text`, nodeAttributes, ``));
  }

  switch (el.nodeName) {
    case `BODY`:
      return jsx(`fragment`, {}, children);
    case `BR`:
      return `\n`;
    case `BLOCKQUOTE`:
      return jsx(
        `element`,
        {
          type: `quote`,
        },
        children,
      );
    case `P`:
      return jsx(
        `element`,
        {
          type: `paragraph`,
        },
        children,
      );
    case `A`:
      return jsx(
        `element`,
        {
          type: `link`,
          url: el.getAttribute(`href`),
        },
        children,
      );
    default:
      return children;
  }
};

type ParagraphNode = Element & {
  type: 'paragraph';
};

type ImageNode = Element & {
  type: 'image';
  url: string;
};

export type CustomNode = ParagraphNode | ImageNode;

export const serialize = (node: CustomNode[]) => {
  let str = ``;
  console.log(`node!`, node);

  node.forEach((item) => {
    switch (item.type) {
      case `paragraph`:
        const children = item?.children
          ?.map((n: any) => {
            if (n.text) {
              return escapeHtml(n.text);
            }
            console.log(`n`, n);
            return n;
          })
          .join(``);

        str += `<p>${children}</p>`;
        break;

      case `image`:
        const { url, caption } = item as ImageNode;
        str += `
        <div>
          <img src="${url}" />
          ${caption ? `<cite>${caption}</cite>` : ``}
        </div>
        `;
        break;

      default:
        break;
    }
  });

  return str;
};
