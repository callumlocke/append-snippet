module.exports = function appendSnippet(snippet, html) {
  var index = html.lastIndexOf('</body>');
  if (index === -1) index = html.lastIndexOf('</html>');
  if (index === -1) index = html.length;

  return (
    html.substring(0, index) +
    snippet +
    html.substring(index)
  );
};
