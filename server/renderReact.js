const reactDOMServer = require('react-dom/server');

module.exports = function(app) {
    app.get('*', (req, res) => {
      match({ routes: routes, location: req.url }, (err, redirect, props) => {
          const appHtml = reactDomServer.renderToString(<RouterContext {...props}/>)
          res.send(renderPage(appHtml))
      })
    })
}
