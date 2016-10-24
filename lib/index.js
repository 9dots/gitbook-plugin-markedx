var markedx = require('markedx')

module.exports = {
  hooks: {
    'page:before': function (page) {
      page.content = markedx(page.content)
      return page
    }
  }
}
