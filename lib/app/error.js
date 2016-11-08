var FoneError = module.exports = function(){
	Error.call(this)
}

FoneError.prototype.__proto__ = Error.prototype