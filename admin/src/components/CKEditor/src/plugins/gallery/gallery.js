import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

import GalleryEditing from './gallery-editing'
import GalleryUi from './gallery-ui'

export default class Gallery extends Plugin {
  static get requires() {
    return [GalleryEditing, GalleryUi]
  }
  static get pluginName() {
    return 'Gallery'
  }
}
