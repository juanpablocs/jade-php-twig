var jade = require('jade');
require('../index.js')(jade);

describe('Test Tags', function () {

  it('should compile tag php', function () {
		var fixtures = jade.compileFile('./test/fixtures/test-tags-php.jade');

		var expected = [
			'<div><?php echo $myVariable; ?></div>',
			'<div>hola <?php echo $otherVariable; ?></div>',
			'<div class="myclass">ssad <?php echo $myVariable; ?></div>',
		];

		fixtures().should.equal(expected.join(''));
  });

});