import Command from '@ckeditor/ckeditor5-core/src/command'

export default class GalleryCommand extends Command {
  execute() {
    this.editor.model.change((writer) => {
      this.editor.model.insertContent(createGallery(writer))
    })
  }

  refresh() {
    const model = this.editor.model
    const selection = model.document.selection
    const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'gallery')
    this.isEnabled = allowedIn !== null
  }
}

function createGallery(writer) {
  const gallery = writer.createElement('gallery')
  const galleryInner = writer.createElement('galleryInner')

  writer.append(galleryInner, gallery)
  writer.appendElement('paragraph', galleryInner)

  return gallery
}
