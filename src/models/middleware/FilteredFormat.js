/**
 * @this import('mongoose').MongooseDocument
 */
async function validate () {
  const feed = await this.model('Feed').findById(this.feed).exec()
  if (!feed) {
    throw new Error(`FilteredFormat's specified feed ${this.feed} was not found`)
  }
  const current = await this.model('Filtered_Format').findById(this._id).exec()
  // If current doesn't exist, then it's a new subscriber
  if (current && current.feed !== this.feed) {
    throw new Error('Feed cannot be changed')
  }
}

module.exports = {
  validate
}
