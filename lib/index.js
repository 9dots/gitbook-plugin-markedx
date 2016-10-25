var markedx = require('markedx')

module.exports = {
  assets: ['assets/website.css'],
  hooks: {
    'page:before': function (page) {
      page.content = markedx(page.content)
      return page
    }
  }
}
