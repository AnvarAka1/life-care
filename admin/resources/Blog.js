const uploadFeature = require('@admin-bro/upload')

const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')

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
    provider: { local: { bucket: 'public' } },
    properties: {
      key: 'fileUrl',
      mimeType: 'mimeType'
    }

  })]
}
