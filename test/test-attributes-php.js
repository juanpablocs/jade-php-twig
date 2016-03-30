var jade = require('jade');
require('../index.js')(jade);

describe('Test Attributes', function () {

  it('should compile with className', function () {
    var fixtures = jade.render('div.myClass with class {{ $var }}');
    var expected = '<div class="myClass">with class <?php echo $var; ?></div>'
    fixtures.should.equal(expected);
  });

  it('should compile with idName', function () {
    var fixtures = jade.render('div#myId with id {{ $var }}');
    var expected = '<div id="myId">with id <?php echo $var; ?></div>'
    fixtures.should.equal(expected);
  });

  it('should compile with multiple className and id', function () {
    var fixtures = jade.render('div.class1.class2.class3#id1 with mutiple {{ $var }}');
    var expected = '<div id="id1" class="class1 class2 class3">with mutiple <?php echo $var; ?></div>'
    fixtures.should.equal(expected);
  });
  
  it('should compile with attributes', function () {
    var fixtures = jade.render('div(class="class1" data-test=1) with attributes {{ $var }}');
    var expected = '<div data-test=\'1\' class="class1">with attributes <?php echo $var; ?></div>'
    fixtures.should.equal(expected);
  });

});