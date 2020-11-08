import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// accepts a contentful `fields` array object,
// an array of fields to pull out of it,
// and a remapping of new field names, if desired.

const mapContentfulFieldsArray = (contentfulObject, fieldsToMap, newFieldNames = []) =>
  contentfulObject.map(item => {
    const obj = {};
    fieldsToMap.forEach((key, index) => {
      let keyName = newFieldNames.length ? newFieldNames[index] : key;

      // handle HTML content field
      if (item.fields[key].content) {
        return (obj[keyName] = documentToHtmlString(item.fields[key]));
      }

      // remap to new fields using index
      obj[keyName] = item.fields[key];
    });

    return obj;
  });

export default mapContentfulFieldsArray;
