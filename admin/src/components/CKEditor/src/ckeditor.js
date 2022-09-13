/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js'
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js'
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js'
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js'
import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js'
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js'
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js'
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui'
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js'
import HtmlComment from '@ckeditor/ckeditor5-html-support/src/htmlcomment.js'
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js'
import Image from '@ckeditor/ckeditor5-image/src/image.js'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js'
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Link from '@ckeditor/ckeditor5-link/src/link.js'
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js'
import List from '@ckeditor/ckeditor5-list/src/list.js'
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js'
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js'
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js'
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js'
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js'
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js'
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js'
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js'
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js'
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js'
import Table from '@ckeditor/ckeditor5-table/src/table.js'
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js'
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage.js'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js'
import TodoList from '@ckeditor/ckeditor5-list/src/todolist'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js'
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js'
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown'

import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar'
import BalloonToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar'
import Style from '@ckeditor/ckeditor5-style/src/style'

import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font/src'

import { StrapiMediaLib } from './plugins/strapi-medialib-plugin'
import { StrapiUploadAdapter } from './plugins/strapi-upload-plugin/strapi-upload-adapter'
import FootNote from './plugins/footnote/src/footnote'
import Gallery from './plugins/gallery/gallery'
import FootnoteLink from './plugins/footnotelink/footnotelink'

class Editor extends ClassicEditor {}

Editor.builtinPlugins = [
  StrapiUploadAdapter,
  Gallery,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  DataFilter,
  DataSchema,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  HeadingButtonsUI,
  ParagraphButtonUI,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  MediaEmbedToolbar,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  StandardEditingMode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  TodoList,
  Underline,
  WordCount,
  Markdown,
  StrapiMediaLib,
  BlockToolbar,
  BalloonToolbar,
  Style,
  FootNote,
  FootnoteLink
]

// Editor configuration.
Editor.defaultConfig = {
  // editor default config

  // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
  // if you need markdown support and output set: removePlugins: [''],
  // default is
  removePlugins: ['Markdown'],
  // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
  toolbar: {
    items: [
      'paragraph',
      'heading1',
      'heading2',
      '|',
      'bold',
      'italic',
      'fontColor',
      'fontBackgroundColor',
      'fontFamily',
      'underline',
      'fontSize',
      'removeFormat',
      'footnote',
      'footnotelink',
      '|',
      'bulletedList',
      'todoList',
      'numberedList',
      '|',
      'alignment',
      'outdent',
      'indent',
      'horizontalLine',
      '|',
      'gallery',
      'StrapiMediaLib',
      'insertTable',
      'blockQuote',
      'mediaEmbed',
      'link',
      'highlight',
      '|',
      'htmlEmbed',
      'sourceEditing',
      'code',
      'codeBlock',
      '|',
      'subscript',
      'superscript',
      'strikethrough',
      'specialCharacters',
      '|',
      'heading',
      'undo',
      'redo'
    ]
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
  fontSize: {
    options: [9, 11, 13, 'default', 17, 19, 21, 27, 35],
    supportAllValues: false
  },
  fontFamily: {
    options: [
      'default',
      'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Lucida Sans Unicode, Lucida Grande, sans-serif',
      'Tahoma, Geneva, sans-serif',
      'Times New Roman, Times, serif',
      'Trebuchet MS, Helvetica, sans-serif',
      'Verdana, Geneva, sans-serif',
      'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif'
    ],
    supportAllValues: true
  },
  fontColor: {
    columns: 5,
    documentColors: 10
  },
  fontBackgroundColor: {
    columns: 5,
    documentColors: 10
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
  // default language: 'en',
  // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
  image: {
    resizeUnit: '%',
    resizeOptions: [
      {
        name: 'resizeImage:original',
        value: null,
        icon: 'original'
      },
      {
        name: 'resizeImage:25',
        value: '25',
        icon: 'small'
      },
      {
        name: 'resizeImage:50',
        value: '50',
        icon: 'medium'
      },
      {
        name: 'resizeImage:75',
        value: '75',
        icon: 'large'
      }
    ],
    toolbar: [
      'toggleImageCaption',
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'linkImage',
      'resizeImage:25',
      'resizeImage:50',
      'resizeImage:75',
      'resizeImage:original'
    ]
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
      'toggleTableCaption'
    ]
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
    ]
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
  htmlSupport: {
    allow: [
      {
        name: 'img',
        attributes: {
          sizes: true,
          loading: true
        }
      }
    ]
  },
  language: 'en'
}

export default { Editor, EditorWatchdog }
