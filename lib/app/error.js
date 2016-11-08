var GinnyProError = module.exports = function(){
	Error.call(this)
}

GinnyProError.prototype.__proto__ = Error.prototype