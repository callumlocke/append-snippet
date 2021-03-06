var appendSnippet = require('./index');
var assert = require('assert');

describe('add-snippet', function () {
  it('works with a normal HTML page', function () {
    assert.strictEqual(
      appendSnippet('SNIPPET', '<html><body><h1>hi</h1></body></html>'),
      '<html><body><h1>hi</h1>SNIPPET</body></html>'
    );
  });

  it('works without an explicit body element', function () {
    assert.strictEqual(
      appendSnippet('SNIPPET', '<html><h1>hi</h1></html>'),
      '<html><h1>hi</h1>SNIPPET</html>'
    );
  });

  it('works without an explicit root element', function () {
    assert.strictEqual(
      appendSnippet('SNIPPET', '<h1>hi</h1>'),
      '<h1>hi</h1>SNIPPET'
    );
  });
});
