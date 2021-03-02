const path = require('path')
const { promises, existsSync } = require('fs')

const { BaseProvider } = require('@admin-bro/upload')

class FileProvider extends BaseProvider {
  constructor () {
    const bucket = path.join(__dirname, '../../')

    super(bucket)

    this.assetPath = bucket
  }

  async upload (file, key) {
    // Need to change it to make it work with absolute/relative path
    // key must be relative
    // fullpath must be absolute, but without 'uploads' dir
    const newKey = key.substr(1)
    const fullPath = path.resolve(this.assetPath, newKey)
    const dirPath = path.dirname(fullPath)

    if (!existsSync(dirPath)) {
      await promises.mkdir(dirPath, { recursive: true })
    }

    await promises.copyFile(file.path, fullPath)
    await promises.unlink(file.path)

    return key
  }

  path (key, bucket) {
    return key
  }

  async delete (key, bucket) {
    const filePath = path.resolve(this.assetPath, key)

    if (existsSync(filePath)) {
      await promises.unlink(filePath)
      const dirPath = path.dirname(filePath)
      const otherFiles = await promises.readdir(dirPath)
      if (otherFiles && otherFiles.length === 0) {
        await promises.rmdir(dirPath)
      }
    }
  }
}

module.exports = FileProvider
