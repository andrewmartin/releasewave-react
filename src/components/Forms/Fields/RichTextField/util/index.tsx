import escapeHtml from 'escape-html';
import { Element } from 'slate';
import { jsx } from 'slate-hyperscript';
import { ContentEmbed } from '../lib/custom-types';

type SlateCustomDataAttributes = 'image' | ContentEmbed['type'];

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
    case `DIV`:
      console.log(`div!!!\n`, el.getAttributeNames());
      const customType: SlateCustomDataAttributes =
        el.getAttribute(`data-slate-custom`);
      console.log(`getAttribute data\n`, el.getAttribute(`data-slate-custom`));
      const imageUrl = el
        .getElementsByTagName(`img`)
        .item(0)
        .getAttribute(`src`);
      const caption = el.getElementsByTagName(`cite`).item(0).innerHTML;
      const href = el.getElementsByTagName(`a`).item(0)?.getAttribute(`href`);

      switch (customType) {
        case `image`:
          return jsx(
            `element`,
            {
              type: `image`,
              imageUrl,
              caption,
            } as ImageNode,
            children,
          );
        case `contentEmbed:release`:
          return jsx(
            `element`,
            {
              type: `contentEmbed:release`,
              imageUrl,
              href,
              name: caption,
            } as ContentEmbed,
            children,
          );
        case `contentEmbed:artist`:
          return jsx(
            `element`,
            {
              type: `contentEmbed:artist`,
              imageUrl,
              href,
              name: caption,
            } as ContentEmbed,
            children,
          );

        default:
          return jsx(`fragment`, {}, children);
      }

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

export type CustomNode = ParagraphNode | ImageNode | ContentEmbed;

/**
 * convert slate nodes into raw HTML
 */
export const serialize = (node: CustomNode[]) => {
  let str = ``;
  console.log(`node!`, node);

  node.forEach((item) => {
    console.log(`item`, item);

    switch (item.type) {
      case `paragraph`:
        const children = item?.children
          ?.map((n: any) => {
            return escapeHtml(n.text || ``);
          })
          .join(``);

        console.log(`children in paragraph`, children);

        str += `<p>${children || ``}</p>`;
        break;

      case `image`:
        str += `
        <div data-slate-custom="image" class="editor-image">
          <img src="${item.imageUrl}" />
          ${item.caption ? `<cite>${item.caption}</cite>` : ``}
        </div>
        `;
        break;

      case `contentEmbed:artist`:
      case `contentEmbed:release`:
        console.log(`contentEmbed item`, item);
        str += `
        <div data-slate-custom="${item.type}" class="editor-content-embed">
          <a href="${item.href}">
            <img src="${item.imageUrl}" />
            ${item.name ? `<cite>${item.name}</cite>` : ``}
          </a>
        </div>
        `;
        break;

      default:
        break;
    }
  });

  console.log(`str`, str);

  return str;
};
