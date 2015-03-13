Package.describe({
  name: "gwendall:templates-watch",
  summary: "Watch changes of specific template variables",
  git: "https://github.com/gwendall/meteor-templates-watch.git",
  version: "0.1.2"
});

Package.onUse(function (api, where) {

  api.use([
    "blaze@2.0.4",
    "reactive-var@1.0.4"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

});
