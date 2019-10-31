let response = {
  get body () {
    // get时返回该方法
    return this._body
  },
  set body (value) {
    this.res.statusCode = 200
    // set时先保存该方法
    this._body = value
  }
}


module.exports = response