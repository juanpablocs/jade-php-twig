# jade-php-twig
jade with php inspired in twig

##the problem
integration with php is bad, does not respect indenting
```php
.content
  <?php foreach($users as $user): ?>
  li(data-id!="<?php echo $user->id; ?>") hello <?php echo $user->name;?>
  <!-- indent? -->
  <?php endforeach; ?>
```
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

