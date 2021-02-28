const path = require('path')

const uploadFeature = require('@admin-bro/upload')

const FileProvider = require('../features/FileProvider')
const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')

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
      bucket: 'bucket',
      key: 'fileUrl',
      mimeType: 'mimeType'
    }

  })]
}
