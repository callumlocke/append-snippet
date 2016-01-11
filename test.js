var appendSnippet = require('.');
var assert = require('assert');

describe('add-snippet', function () {
  it('works with a normal HTML page', function () {
    assert.strictEqual(
      appendSnippet('<html><body><h1>hi</h1></body></html>', 'SNIPPET'),
      '<html><body><h1>hi</h1>SNIPPET</body></html>'
    );
  });

  it('works without an explicit body element', function () {
    assert.strictEqual(
      appendSnippet('<html><h1>hi</h1></html>', 'SNIPPET'),
      '<html><h1>hi</h1>SNIPPET</html>'
    );
  });

  it('works without an explicit root element', function () {
    assert.strictEqual(
      appendSnippet('<h1>hi</h1>', 'SNIPPET'),
      '<h1>hi</h1>SNIPPET'
    );
  });
});
