const KeyValueModel = require('../../models/KeyValue.js').model
const Base = require('./Base.js')

class KeyValue extends Base {
  constructor (data, _saved) {
    super(data, _saved)

    if (!this._id) {
      throw new TypeError('_id is undefined')
    }

    /**
     * Value
     * @type {any}
     */
    this.value = this.getField('value')
    if (this.value === undefined) {
      throw new TypeError('value is undefined')
    }
  }

  toObject () {
    return {
      _id: this._id,
      value: this.value
    }
  }

  static get Model () {
    return KeyValueModel
  }
}

module.exports = KeyValue
