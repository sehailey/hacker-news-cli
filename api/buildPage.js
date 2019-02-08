module.exports = listString =>
  `
  <!DOCTYPE html>
  <html>
    <body>
      <h2>Haxor Newz</h2>
      <h3>"uber l337"</h3>
      <table>
        <thead>
          <th>Title</th>
          <th>Link</th>
        </thead>
          ${listString}
        <tfoot>
          ATTACK!
        </tfoot>
      </table>
      <footer>&#9398; anarchy planet</footer>
    </body>
  </html>

`;
