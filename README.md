# Simply Meta
Simply Meta allows for the quick addition of complex meta tags, including SEO tags, from an javascript object or JSON.

```js
var simplyMeta = require('simply-meta');
return simplyMeta({
    charset: "utf-8",
    httpEquiv: {
        cacheControl: "Public"
    }
});
```

Outputs...

```html
<meta data-sm="" charset="utf-8"><meta data-sm="" http-equiv="Cache-Control" content="Public">
```

## Install
```sh
npm i -D simply-meta
yarn add -D simply-meta
```


## Functions
```js
var simplyMeta = require('simply-meta');

var meta = {
    charset: "utf-8",
    httpEquiv: {
        cacheControl: "Public"
    }
};
var options = {};

var metaHtml = simplyMeta(meta, options);
// returns the meta tags as html

var html = '<!DOCTYPE html><html><head></head><body></body></html>';
var metaHtmlAdded = simplyMeta.html(meta, html, options);
// returns the html with meta tags in the header
```

## Options
```js
var options = {
    disableHelper: true // disables the output of data-sm="" (use only if you are not reusing the html)
};
```
