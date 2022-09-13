import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import { ContextualBalloon, clickOutsideHandler } from '@ckeditor/ckeditor5-ui'
import FormView from './footnotelinkview'
import './styles.css'
import getRangeText from './utils.js'

export default class FootnoteLinkUI extends Plugin {
  static get requires() {
    return [ContextualBalloon]
  }

  init() {
    const editor = this.editor

    // Create the balloon and the form view.
    this._balloon = this.editor.plugins.get(ContextualBalloon)
    this.formView = this._createFormView()

    editor.ui.componentFactory.add('footnotelink', () => {
      const button = new ButtonView()

      button.label = 'FootnoteLink'
      button.tooltip = true
      button.withText = true

      // Show the UI on button click.
      this.listenTo(button, 'execute', () => {
        this._showUI()
      })

      return button
    })
  }

  _createFormView() {
    const editor = this.editor
    const formView = new FormView(editor.locale)

    // Execute the command after clicking the "Save" button.
    this.listenTo(formView, 'submit', () => {
      // Grab values from the footnotelink and body input fields.
      const value = {
        span: formView.footnotelinkInputView.fieldView.element.value,
        body: formView.bodyInputView.fieldView.element.value
      }
      editor.execute('addFootnoteLink', value)

      // Hide the form view after submit.
      this._hideUI()
    })

    // Hide the form view after clicking the "Cancel" button.
    this.listenTo(formView, 'cancel', () => {
      this._hideUI()
    })

    // Hide the form view when clicking outside the balloon.
    clickOutsideHandler({
      emitter: formView,
      activator: () => this._balloon.visibleView === formView,
      contextElements: [this._balloon.view.element],
      callback: () => this._hideUI()
    })

    return formView
  }

  _showUI() {
    const selection = this.editor.model.document.selection

    // Check the value of the command.
    const commandValue = this.editor.commands.get('addFootnoteLink').value

    this._balloon.add({
      view: this.formView,
      position: this._getBalloonPositionData()
    })

    // Disable the input when the selection is not collapsed.
    this.formView.footnotelinkInputView.isEnabled = selection.getFirstRange().isCollapsed

    // Fill the form using the state (value) of the command.
    if (commandValue) {
      this.formView.footnotelinkInputView.fieldView.value = commandValue.span
      this.formView.bodyInputView.fieldView.value = commandValue.body
    }
    // If the command has no value, put the currently selected text (not collapsed)
    // in the first field and empty the second in that case.
    else {
      const selectedText = getRangeText(selection.getFirstRange())

      this.formView.footnotelinkInputView.fieldView.value = selectedText
      this.formView.bodyInputView.fieldView.value = ''
    }

    this.formView.focus()
  }

  _hideUI() {
    // Clear the input field values and reset the form.
    this.formView.footnotelinkInputView.fieldView.value = ''
    this.formView.bodyInputView.fieldView.value = ''
    this.formView.element.reset()

    this._balloon.remove(this.formView)

    // Focus the editing view after inserting the footnotelink so the user can start typing the content
    // right away and keep the editor focused.
    this.editor.editing.view.focus()
  }

  _getBalloonPositionData() {
    const view = this.editor.editing.view
    const viewDocument = view.document
    let target = null

    // Set a target position by converting view selection range to DOM
    target = () => view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange())

    return {
      target
    }
  }
}
