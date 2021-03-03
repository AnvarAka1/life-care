const path = require('path')

exports.uploadPath = (record, filename) => {
  return path.join('/uploads', record.id(), filename)
}
