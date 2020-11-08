import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const buildContent = content => documentToHtmlString(content);

export default buildContent;
