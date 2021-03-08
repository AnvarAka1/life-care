const invisible = { isVisible: { list: false, view: false, edit: false, create: false } }

const imageProperty = {
  image: { isVisible: { list: false } },
  key: invisible,
  mimeType: invisible,
  bucket: invisible,
  size: invisible
}

exports.invisible = invisible

exports.imageProperty = imageProperty
