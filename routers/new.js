
const express = require('express');
const path = require('path'); 
const pageNewCD = express.Router();
const generateCD = require('../static/index.js');
const app = express();

const exphdb = require('express-handlebars');
const handlebarsInstance = exphdb.create({});
app.engine('handlebars', handlebarsInstance.engine);

pageNewCD.use;

pageNewCD.use(express.json());

pageNewCD.get('/new', (req, res) => {
  const filePath = path.join(__dirname, '../static/views/new.html');
  res.sendFile(filePath);
});

pageNewCD.post('/new', (req, res) => {
  app.set('view-engine', '.hbs');
  
  res.render('../static/views/main.hbs', 
    { 
      margen_izq: req.body.margenes.m_left,
      margen_sup: req.body.margenes.m_top,

      destinatario_name: req.body.destinatario.name,
      destinatario_adress: req.body.destinatario.adress,
      destinatario_cp: req.body.destinatario.cp,
      destinatario_city: req.body.destinatario.city,
      destinatario_state: req.body.destinatario.state,

      remitente_name: req.body.remitente.name,
      remitente_adress: req.body.remitente.adress,
      remitente_cp: req.body.remitente.cp,
      remitente_city: req.body.remitente.city,
      remitente_state: req.body.remitente.state,

      cuerpo: req.body.cuerpo.body_cd,
      firma_name: req.body.firma.name,
      firma_dni: req.body.firma.dni
    }
  );
});

module.exports = pageNewCD;