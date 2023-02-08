import Command from '@ckeditor/ckeditor5-core/src/command'
import findAttributeRange from '@ckeditor/ckeditor5-typing/src/utils/findattributerange'
import getRangeText from './utils.js'
import { toMap } from '@ckeditor/ckeditor5-utils'

export default class FootnoteLinkCommand extends Command {
  refresh() {
    const model = this.editor.model
    const selection = model.document.selection
    const firstRange = selection.getFirstRange()

    // When the selection is collapsed, the command has a value if the caret is in an footnotelink.
    if (firstRange.isCollapsed) {
      if (selection.hasAttribute('footnotelink')) {
        const attributeValue = selection.getAttribute('footnotelink')

        // Find the entire range containing the footnotelink under the caret position.
        const footnotelinkRange = findAttributeRange(
          selection.getFirstPosition(),
          'footnotelink',
          attributeValue,
          model
        )

        this.value = {
          span: getRangeText(footnotelinkRange),
          title: attributeValue.title,
          body: attributeValue.body,
          range: footnotelinkRange
        }
      } else {
        this.value = null
      }
    }
    // When the selection is not collapsed, the command has a value if the selection contains a subset of a single footnotelink
    // or an entire footnotelink.
    else {
      if (selection.hasAttribute('footnotelink')) {
        const attributeValue = selection.getAttribute('footnotelink')

        // Find the entire range containing the footnotelink under the caret position.
        const footnotelinkRange = findAttributeRange(
          selection.getFirstPosition(),
          'footnotelink',
          attributeValue,
          model
        )

        if (footnotelinkRange.containsRange(firstRange, true)) {
          this.value = {
            span: getRangeText(firstRange),
            title: attributeValue.title,
            body: attributeValue.body,
            range: firstRange
          }
        } else {
          this.value = null
        }
      } else {
        this.value = null
      }
    }

    // The command is enabled when the "footnotelink" attribute can be set on the current model selection.
    this.isEnabled = model.schema.checkAttributeInSelection(selection, 'footnotelink')
  }

  execute({ span, title, body }) {
    const model = this.editor.model
    const selection = model.document.selection

    model.change((writer) => {
      // If selection is collapsed then update the selected footnotelink or insert a new one at the place of caret.
      if (selection.isCollapsed) {
        // When a collapsed selection is inside text with the "footnotelink" attribute, update its text and body.
        if (this.value) {
          const { end: positionAfter } = model.insertContent(
            writer.createText(span, { footnotelink: {title, body} }),
            this.value.range
          )
          // Put the selection at the end of the inserted footnotelink.
          writer.setSelection(positionAfter)
        }
        // If the collapsed selection is not in an existing footnotelink, insert a text node with the "footnotelink" attribute
        // in place of the caret. Because the selection is collapsed, the attribute value will be used as a data for text.
        // If the footnotelink is empty, do not do anything.
        else if (span !== '') {
          const firstPosition = selection.getFirstPosition()

          // Collect all attributes of the user selection (could be "bold", "italic", etc.)
          const attributes = toMap(selection.getAttributes())

          // Put the new attribute to the map of attributes.
          attributes.set('footnotelink', {title, body})

          // Inject the new text node with the footnotelink text with all selection attributes.
          const { end: positionAfter } = model.insertContent(writer.createText(span, attributes), firstPosition)

          // Put the selection at the end of the inserted footnotelink. Using an end of a range returned from
          // insertContent() just in case nodes with the same attributes were merged.
          writer.setSelection(positionAfter)
        }

        // Remove the "footnotelink" attribute attribute from the selection. It stops adding a new content into the footnotelink
        // if the user starts to type.
        writer.removeSelectionAttribute('footnotelink')
      } else {
        // If the selection has non-collapsed ranges, change the attribute on nodes inside those ranges
        // omitting nodes where the "footnotelink" attribute is disallowed.
        const ranges = model.schema.getValidRanges(selection.getRanges(), 'footnotelink')

        for (const range of ranges) {
          writer.setAttribute('footnotelink', {title, body}, range)
        }
      }
    })
  }
}
