# jade-php-twig
jade with php inspired in twig, note `this does not cover all options of twig`

##install
```
npm install jade-php-twig --save-dev
```

##usage
```js
var gulp        = require('gulp');
var gulpJade    = require('gulp-jade');
var jadePhpTwig = require('jade-php-twig');
gulp.task('jade', function(){
	return gulp.src('./jade/*.jade')
		.pipe(gulpJade({
		  jade:jadePhpTwig(),
			pretty:true
		}))
		.pipe(gulp.dest('./src/'))
})
```

##the problem
integration with php is bad, does not respect indenting
```php
.content
  <?php foreach($users as $user): ?>
  li(data-id!="<?php echo $user->id; ?>") hello <?php echo $user->name;?>
  <!-- indent? -->
  <?php endforeach; ?>
```
##new featured
optional use of the signs " $ " and " ; ". 
Now is posible: constants and variable assing

jade | result
------------ | -------------
`li {{ variable }}` | `<li><?php echo $variable; ?></li>`
`li {{ strrev($variable) }}` | `<li><?php echo strrev($variable); ?></li>`
`li {{ myConstant|const }}` | `<li><?php echo myConstant; ?></li>`
`li {{ this.variable }}` | `<li><?php echo $this->variable; ?></li>`
`li {{ this.helper().object }}` | `<li><?php echo $this->helper()->object; ?></li>`

##examples
variable in text
```jade
div.myclass hello {{ $world }} php
//- result
//- <div class="myclass"> hello <?php echo $world; ?> php</div>
```

variable in attributes
```jade
div.myclass(data-test!="{{ $var }}") hello {{ $world }} php
//- result
//- <div data-test="<?php echo $var; ?>" class="myclass"> hello <?php echo $world; ?> php</div>
```

variable in pipe text
```jade
div.myclass(data-test!="{{ $var }}") hello {{ $world }} php
  | new line
  | line with php {{ $test }}
//- result
//- <div data-test="<?php echo $var; ?>" class="myclass"> 
//-  hello <?php echo $world; ?> php
//-  new line
//-  line with php <?php echo $test; ?>
//- </div>
```

##structures of control and conditional
structure foreach
```jade
.content
  {% foreach($users as $user): %}
    div hello {{ $user }}
  {% endforeach %}
//- result
//- <div class="content">
//-   <?php foreach($sers as $user): ?> 
//-     <div> hello <?php echo $yser; ?></div>
//-   <?php endforeach; ?>
//- </div>
```
conditional
```jade
.content
  {% if(true): %}
    div is true
  {% else: %}
    div is false
  {% endif %}
//- result
//- <div class="content">
//-   <?php if(true): ?> 
//-     <div>is true</div>
//-   <?php else: ?>
//-     <div>is false</div>
//-   <?php endif; ?>
//- </div>
```

