const uploadFeature = require('@admin-bro/upload')

const Partner = require('../../models/partner')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Partner,
  listProperties: ['fileUrl', 'mimeType'],
  options: {
    navigation: contentNavigation,
    properties: {
      title: {
        isTitle: true
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
