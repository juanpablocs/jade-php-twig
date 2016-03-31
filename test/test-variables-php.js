var jade = require('jade');
require('../index.js')(jade);

describe('Test Variables PHP', function () {

  it('should compile php tag', function () {
    var fixtures = jade.render('li {{ variable }}');
    var expected = '<li><?php echo $variable; ?></li>'
    fixtures.should.equal(expected);
  });

  it('should compile php tag with dollar', function () {
    var fixtures = jade.render('li {{ variable }} and {{ $aa; }}');
    var expected = '<li><?php echo $variable; ?> and <?php echo $aa; ?></li>'
    fixtures.should.equal(expected);
  });

  it('should compile php tag  with arrows', function () {
    var fixtures = jade.render('li {{ this.testing }} and {{ this.helper().profile }}');
    var expected = '<li><?php echo $this->testing; ?> and <?php echo $this->helper()->profile; ?></li>';
    fixtures.should.equal(expected);
  });

  it('should compile php tag  with constants', function () {
    var fixtures = jade.render('li {{ myconstant|const }}');
    var expected = '<li><?php echo myconstant; ?></li>';
    fixtures.should.equal(expected);
  });

  it('should compile php tag  with functions', function () {
    var fixtures = jade.render('li {{ myFunc($cat) }} and {{ str_replace($dog, "dog", "cat") }}');
    var expected = '<li><?php echo myFunc($cat); ?> and <?php echo str_replace($dog, "dog", "cat"); ?></li>';
    fixtures.should.equal(expected);
  });

  it('should compile php tag  with functions2', function () {
    var fixtures = jade.render('li {{ $myFunc($cat); }}');
    var expected = '<li><?php echo $myFunc($cat); ?></li>';
    fixtures.should.equal(expected);
  });
  
});