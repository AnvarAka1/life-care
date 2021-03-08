const uploadFeature = require('@admin-bro/upload')

const { uploadPath } = require('../../utils/upload')
const FileProvider = require('../features/FileProvider')
const { imageProperty } = require('../defaultProperties/')

const hideEditTimestamps = resource => {
  return {
    ...resource,
    options: {
      ...resource.options,
      sort: { direction: 'desc' },
      properties: {
        ...resource.options.properties,
        updatedAt: { isVisible: { edit: false } },
        createdAt: { isVisible: { edit: false } },
      }
    }
  }
}

const withImage = resource => {
  const fileProvider = new FileProvider()
  return {
    ...resource,
    listProperties: ['fileUrl', 'mimeType'],
    options: {
      ...resource.options,
      properties: {
        ...resource.options.properties,
        ...imageProperty,
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
}

exports.hideEditTimestamps = hideEditTimestamps
exports.withImage = withImage
