Meteor Templates watch
=================

Adds watch methods to template instances. Inspired by Angular's $watch function.


Installation
------------

``` sh
meteor add gwendall:templates-watch
```

Methods
----------

**template.watch(var, callback)**  
Watch changes of a single variable.  

**template.watchGroup(vars, callback)**  
Watch changes of any variables in a set.  

Example
-------
``` javascript
Template.user.created = function() {
  var tpl = this;
  tpl.name = new ReactiveVar();
  tpl.age = new ReactiveVar();
  tpl.watch("name", function(value) {
    console.log("The value of 'name' changed! It is now: " + value);
  });
  tpl.watchGroup(["name", "age"], function(values) {
    console.log("The value of either 'name' or 'age' changed! Their new values are now the following.");
    for (var k in values) {
      console.log(k + ": " + values[k]);
    })
  });
}
```
