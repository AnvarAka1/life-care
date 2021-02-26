const uploadFeature = require('@admin-bro/upload')

const Testimonial = require('../../models/testimonial')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Testimonial,
  listProperties: ['fileUrl', 'mimeType'],
  options: {
    navigation: contentNavigation
  },
  features: [uploadFeature({
    provider: { local: { bucket: 'public' } },
    properties: {
      key: 'fileUrl',
      mimeType: 'mimeType'
    }

  })]
}
