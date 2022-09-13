import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import FootnoteLinkEditing from './footnotelinkediting'
import FootnoteLinkUI from './footnotelinkui'

export default class FootnoteLink extends Plugin {
  static get requires() {
    return [FootnoteLinkEditing, FootnoteLinkUI]
  }
}
