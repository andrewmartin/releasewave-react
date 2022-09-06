import React, { FC, PropsWithChildren, useMemo, useState } from 'react';
import { Node as SlateNode, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import escapeHtml from 'escape-html';
import { jsx } from 'slate-hyperscript';
import classNames from 'classnames';

// https://codesandbox.io/s/slate-plugins-reproductions-yxr3q?file=/index.tsx
const deserialize = (el, markAttributes = {}): any => {
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
      return jsx(`element`, { type: `quote` }, children);
    case `P`:
      return jsx(`element`, { type: `paragraph` }, children);
    case `A`:
      return jsx(
        `element`,
        { type: `link`, url: el.getAttribute(`href`) },
        children,
      );
    default:
      return children;
  }
};

const serialize = (node: any) => {
  let str = ``;

  node.forEach((item: any) => {
    // console.log(`item`, item);

    const children = item?.children
      ?.map((n: any) => {
        if (n.text) {
          return escapeHtml(n.text);
        }
      })
      .join(``);

    // console.log(`children`, children);
    // console.log(`item.type`, item.type);

    if (item?.type === `paragraph`) {
      str += `<p>${children}</p>`;
    }
  });

  return str;
};

const SlateInner: FC<PropsWithChildren> = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsFocused(true);
  };
  const onBlur: React.FocusEventHandler<HTMLDivElement> = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={classNames(`border-2 p-6 prose-sm transition-all`, {
        'border-pink': isFocused,
      })}
    >
      <Editable
        onBlur={onBlur}
        onClick={onClick}
        placeholder="Enter some plain text..."
      />
    </div>
  );
};

interface Props {
  value?: string;
  onChange: (value: string) => void;
}

export const RichTextField = (props: Props) => {
  const { value, onChange } = props;
  const document = new DOMParser().parseFromString(value, `text/html`);
  const slateValues = deserialize(document.body);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={slateValues}
      onChange={(value) => {
        const serializedHTML = serialize(value as any as SlateNode);
        onChange(serializedHTML);
      }}
    >
      <SlateInner />
    </Slate>
  );
};
