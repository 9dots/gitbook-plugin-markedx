var markedx = require('markedx')
var path = require('path')
var cwd = process.cwd()

module.exports = {
  assets: ['assets/website.css'],
  hooks: {
    'page:before': function (page) {
    	var pluginConfigs = this.config.values.pluginsConfig
    	var theme = pluginConfigs && pluginConfigs.theme ? require(path.resolve(cwd, pluginConfigs.theme)) : {}
      page.content = markedx(page.content, theme)
      return page
    }
  }
}
