'use stric';
/**
 * [jadeTwigPHP include]
 * @type {Function}
 */
var jadeTwigPHP = require("./libs/jade-php.js");

/**
 * [export jadeTwigPhp]
 * @param  {object} jade instance and path
 * @return {jade} instance
 */
module.exports = function(opt){
	
	// jade instance
	var jadeInstance = opt.jade || require('jade');
	
	// jadeTwigPHP logic
	jadeTwigPHP(jadeInstance);
	
	// return jade
	return opt.jade;
}
