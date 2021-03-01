const path = require('path')

const uploadFeature = require('@admin-bro/upload')

const FileProvider = require('../features/FileProvider')
const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')

const invisible = { isVisible: { list: false, view: false, edit: false, create: false } }

const fileProvider = new FileProvider()
module.exports = {
  resource: Blog,
  listProperties: ['fileUrl', 'mimeType'],
  options: {
    navigation: contentNavigation,
    properties: {
      title: {
        isTitle: true
      },
      description: {
        type: 'richtext'
      },
      updatedAt: { isVisible: { edit: false } },
      createdAt: { isVisible: { edit: false } },
      file: { isVisible: { list: false } },
      key: invisible,
      mimeType: invisible,
      bucket: invisible,
      size: invisible
    },
    custom: {
      description: {
        hi: 'hello'
      }
    }
  },
  features: [uploadFeature({
    provider: fileProvider,
    properties: {
      file: 'file',
      // here backend will send information which files has to be deleted
      // It is required only in `multiple` mode, but cannot overlap any other property
      filesToDelete: 'filesToDelete',

      // DB properties: have to be in your schema
      // where bucket key will be stored
      key: 'key',
      // where mime type will be stored
      mimeType: 'mime',
      // where bucket name will be stored
      bucket: 'bucket',
      // where size will be stored
      size: 'size',
    }
  })]
}
