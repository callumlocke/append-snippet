# append-snippet


```js
var appendSnippet = require('append-snippet');

var html = '<body>\n<h1>hello!</h1>\ndemo\n</body>';

var result = appendSnippet('<script>alert("cods")</script>', html);
// <body>\n<h1>hello!</h1>\ndemo\n<script>alert("cods")</script></body>
```

If there's no closing body tag, it goes just before the `</html>`, or failing that, the end of the string.

## License

[MIT](./LICENSE) © [Callum Locke](http://callumlocke.com/)
