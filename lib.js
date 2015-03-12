Blaze.TemplateInstance.prototype.watch = function(key, hook) {
  var tpl = this;
  if (key.constructor !== String) return;
  if (hook.constructor !== Function) return;
  if (!tpl[key] || !tpl[key].get) tpl[key] = new ReactiveVar();
  tpl.autorun(function() {
    var value = tpl[key].get();
    hook.apply(this, [value]);
  });
}

Blaze.TemplateInstance.prototype.watchGroup = function(keys, hook) {
  var tpl = this;
  if (keys.constructor !== Array) return;
  if (hook.constructor !== Function) return;
  for (var i = 0; i < keys.length; i++) {
    if (!tpl[keys[i]] || !tpl[keys[i]].get) tpl[keys[i]] = new ReactiveVar();
  }
  tpl.autorun(function() {
    var values = {};
    for (var i = 0; i < keys.length; i++) {
      values[keys[i]] = tpl[keys[i]].get();
    }
    hook.apply(this, [values]);
  });
}
