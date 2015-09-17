var Fino = function(){
	this.templates = [  ]

	this.templateExists = function(templateName){
		for(var i = 0; i < this.templates.length; i++){
			if(this.templates[i].name === templateName){
				return true
			}
		}
		return false
	}

	this.addTemplateFromString = function(templateName, templateString){
		if(!this.templateExists(templateName)) this.templates.push({ 'name': templateName, 'source': templateString })
	}

	this.listTemplates = function(){
		return this.templates
	}

	this.getTemplateSource = function(templateName){
		for(var i = 0; i < this.templates.length; i++){
			if(this.templates[i].name === templateName){
				if(this.templates[i].source){
					return this.templates[i].source
				}else{
					// Throw error
					return false
				}
			}
		}
		// Throw error
		return false
	}

	this.render = function(templateName, data){
		var source = this.getTemplateSource(templateName)
		for(field in data){
			source = source.replace(new RegExp('(::' + field + '::)', 'g'), data[field])
		}
		return source
	}

	this._makeAliases = function(funcName, aliases){
		for(var i = 0; i < aliases.length; i++){
			this[aliases[i]] = this[funcName]
		}
	}

	// Aliases
	this._makeAliases('render', [ 'renderTemplate', 'r' ])
	this._makeAliases('addTemplateFromString', [ 'loadTemplateFromString', 'addSTempl' ])
	this._makeAliases('listTemplates', [ 'list' ])
}
