# append-snippet

[![NPM version][npm-image]][npm-url] [![Linux Build Status][travis-image]][travis-url] [![Windows Build Status][appveyor-image]][appveyor-url] [![Dependency Status][depstat-image]][depstat-url]

A function that synchronously injects a snippet of markup into an HTML document, immediately before the closing `</body>` tag.

```js
var appendSnippet = require('append-snippet');

var html = '<body>\n<h1>hello!</h1>\ndemo\n</body>';

var result = appendSnippet('<script>alert("cods")</script>', html);
// <body>\n<h1>hello!</h1>\ndemo\n<script>alert("cods")</script></body>
```

If there's no closing body tag, it goes just before the `</html>`, or failing that, the end of the string.

## License

[MIT](./LICENSE) © [Callum Locke](http://callumlocke.com/)

<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/append-snippet
[npm-image]: https://img.shields.io/npm/v/append-snippet.svg?style=flat-square

[travis-url]: https://travis-ci.org/callumlocke/append-snippet
[travis-image]: https://img.shields.io/travis/callumlocke/append-snippet.svg?style=flat-square&label=Linux

[appveyor-url]: https://ci.appveyor.com/project/callumlocke/append-snippet
[appveyor-image]: https://img.shields.io/appveyor/ci/callumlocke/append-snippet/master.svg?style=flat-square&label=Windows

[depstat-url]: https://david-dm.org/callumlocke/append-snippet
[depstat-image]: https://img.shields.io/david/callumlocke/append-snippet.svg?style=flat-square
