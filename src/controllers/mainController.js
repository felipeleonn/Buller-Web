module.exports = {

  index: (req, res) => {
    return res.render('index')
  },
  catalogo: (req, res) => {
    return res.render('catalogo')
  },
  contacto: (req, res) => {
    return res.render('contacto')
  },
  nosotros: (req, res) => {
    return res.render('nosotros')
  }
}