import React from 'react';
import cx from 'classnames';
import { contentfulContent } from 'helpers';

import './Modules.scss';

export default class Modules extends React.Component {
  render() {
    const { items, className } = this.props;
    return items
      .filter(({ fields }) => fields.type !== 'intro')
      .map(({ fields }) => (
        <div className={cx(className, 'module', `module--${fields.slug}`, `module--${fields.type}`)} key={fields.slug}>
          {fields.title && <h4>{fields.title}</h4>}
          <div dangerouslySetInnerHTML={{ __html: contentfulContent(fields.contentBlockItem) }} />
        </div>
      ));
  }
}
