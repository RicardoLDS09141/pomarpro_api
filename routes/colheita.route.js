var express = require('express');
var router = express.Router();
const sql = require('../models/colheita.model');



router.post('/add',(req,res)=>{
    //guarda as informações em uma variavel para facilitar o acesso
    let dados = req.body.info;
    console.log(dados)
    sql.addcolheita(
     
      dados.quantidade,
      dados.dt_colheita,
      dados.arvore
     
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
      return;
      }
      res.status(201).json(resposta);
  
    })
    
  })



  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodoscolheita().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
})








module.exports = router;