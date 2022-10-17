import React, { FC, PropsWithChildren, useMemo, useState } from 'react';
import { Node as SlateNode, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import classNames from 'classnames';
import { CustomNode, deserialize, serialize } from './util';

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
      className={classNames(
        `min-h-[500px] border-2 p-6 text-base w-full transition-all`,
        {
          'border-pink': isFocused,
        },
      )}
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
  const document = new DOMParser().parseFromString(value || ``, `text/html`);
  const slateValues = deserialize(document.body);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={slateValues}
      onChange={(value) => {
        const serializedHTML = serialize(value as any as CustomNode[]);
        onChange(serializedHTML);
      }}
    >
      <SlateInner />
    </Slate>
  );
};
