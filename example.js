var file = '<!DOCTYPE html><html><head></head><body></body></html>';
var meta = require('./index');
console.log(meta.html(require('./example.json'), file));