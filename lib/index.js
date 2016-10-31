var markedx = require('markedx')

module.exports = {
  assets: ['assets/website.css'],
  hooks: {
    'page:before': function (page) {
    	var pluginConfigs = this.config.values.pluginsConfig
    	var theme = pluginConfigs && pluginConfigs.theme ? require(pluginConfigs.theme) : {}
      page.content = markedx(page.content, theme)
      return page
    }
  }
}
