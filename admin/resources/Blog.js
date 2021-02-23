const uploadFeature = require('@admin-bro/upload')

const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Blog,
  listProperties: ['fileUrl', 'mimeType'],
  options: {
    navigation: contentNavigation,
    properties: {
      description: {
        type: 'richtext'
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
