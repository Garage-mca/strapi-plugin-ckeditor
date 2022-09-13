import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import FootnoteLinkCommand from './footnotelinkcommand'

export default class FootnoteLinkEditing extends Plugin {
  init() {
    this._defineSchema()
    this._defineConverters()

    this.editor.commands.add('addFootnoteLink', new FootnoteLinkCommand(this.editor))
  }
  _defineSchema() {
    const schema = this.editor.model.schema

    // Extend the text node's schema to accept the footnotelink attribute.
    schema.extend('$text', {
      allowAttributes: ['footnotelink']
    })
  }
  _defineConverters() {
    const conversion = this.editor.conversion

    // Conversion from a model attribute to a view element
    conversion.for('downcast').attributeToElement({
      model: 'footnotelink',

      // Callback function provides access to the model attribute value
      // and the DowncastWriter
      view: (modelAttributeValue, conversionApi) => {
        const { writer } = conversionApi
        return writer.createAttributeElement('span', {
          class: 'FootnoteLink',
          'data-body': modelAttributeValue
        })
      }
    })

    // Conversion from a view element to a model attribute
    conversion.for('upcast').elementToAttribute({
      view: {
        name: 'span',
        classes: 'FootnoteLink',
        attributes: ['data-body']
      },
      model: {
        key: 'footnotelink',

        // Callback function provides access to the view element
        value: (viewElement) => {
          const body = viewElement.getAttribute('data-body')
          return body
        }
      }
    })
  }
}
