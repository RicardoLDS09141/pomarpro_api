var express = require('express');
var router = express.Router();
const sql = require('../models/arvore.model');



router.post('/add',(req,res)=>{
    //guarda as informações em uma variavel para facilitar o acesso
    let dados = req.body.info;
  console.log(dados)
    sql.addarvore(
      dados.defensivo,
      dados.fertilizante,
      dados.ultima_verificacao,
      dados.tb_tipo_id,
      dados.tb_situacao_id
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
      return;
      }
      res.status(201).json(resposta);
  
    })
    
  })



  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosarvore().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
})








module.exports = router;