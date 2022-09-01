import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils'
import Widget from '@ckeditor/ckeditor5-widget/src/widget'

import './styles.css'

import GalleryCommand from './gallery-command'

export default class GalleryEditing extends Plugin {
  static get requires() {
    return [Widget]
  }

  init() {
    this._defineSchema()
    this._defineConverters()
    this.editor.commands.add('gallery', new GalleryCommand(this.editor))
  }

  _defineSchema() {
    const schema = this.editor.model.schema

    schema.register('gallery', {
      allowWhere: '$block',
      isObject: true
    })

    schema.register('galleryInner', {
      isLimit: true,
      allowIn: 'gallery',
      allowContentOf: '$root'
    })

    schema.addChildCheck((context, childDef) => {
      if (context.endsWith('galleryInner') && childDef.name === 'gallery') {
        return false
      }
    })
  }

  _defineConverters() {
    const conversion = this.editor.conversion
    conversion.for('upcast').elementToElement({
      model: 'gallery',
      view: {
        name: 'div',
        classes: 'gallery'
      }
    })
    conversion.for('dataDowncast').elementToElement({
      model: 'gallery',
      view: {
        name: 'div',
        classes: 'gallery'
      }
    })
    conversion.for('editingDowncast').elementToElement({
      model: 'gallery',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createContainerElement('div', { class: 'gallery' })
        return toWidget(div, viewWriter, { label: 'gallery widget' })
      }
    })

    conversion.for('upcast').elementToElement({
      model: 'galleryInner',
      view: {
        name: 'div',
        classes: 'gallery-inner'
      }
    })
    conversion.for('dataDowncast').elementToElement({
      model: 'galleryInner',
      view: {
        name: 'div',
        classes: 'gallery-inner'
      }
    })
    conversion.for('editingDowncast').elementToElement({
      model: 'galleryInner',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', { class: 'gallery-inner' })
        return toWidgetEditable(div, viewWriter)
      }
    })
  }
}
