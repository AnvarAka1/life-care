const uploadFeature = require('@admin-bro/upload')

const FileProvider = require('../features/FileProvider')
const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')
const { uploadPath } = require('../../utils/upload')

const invisible = { isVisible: { list: false, view: false, edit: false, create: false } }

const fileProvider = new FileProvider()
module.exports = {
  resource: Blog,

  listProperties: ['fileUrl', 'mimeType'],
  options: {
    sort: { direction: 'desc' },
    navigation: contentNavigation,
    properties: {
      _id: {
        isTitle: true
      },
      'description.en': {
        type: 'richtext'
      },
      'description.ru': {
        type: 'richtext'
      },
      updatedAt: { isVisible: { edit: false } },
      createdAt: { isVisible: { edit: false } },
      image: { isVisible: { list: false } },
      key: invisible,
      mimeType: invisible,
      bucket: invisible,
      size: invisible
    }
  },
  features: [uploadFeature({
    provider: fileProvider,
    properties: {
      file: 'image',
      filesToDelete: 'filesToDelete',

      key: 'key',
      mimeType: 'mime',
      bucket: 'bucket',
      size: 'size'
    },
    uploadPath
  })]
}
