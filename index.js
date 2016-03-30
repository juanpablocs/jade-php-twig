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
	
	var jade = require('jade');

	// jade instance
	var jadeInstance = typeof opt == 'object' ? (opt.jade || jade) : jade;
	
	// jadeTwigPHP logic
	jadeTwigPHP(jadeInstance);
	
	// return jade
	return jadeInstance;
}