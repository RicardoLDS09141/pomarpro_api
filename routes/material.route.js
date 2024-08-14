var express = require('express');
var router = express.Router();
const sql = require('../models/material.model');



router.post('/add',(req,res)=>{
    //guarda as informações em uma variavel para facilitar o acesso
    let dados = req.body.info;
  
    sql.addMaterial(
      dados.nome,
      dados.tipo,
      dados.valor,
      dados.fornecedor
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
      return;
      }
      res.status(201).json(resposta);
  
    })
    
  })



  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosMaterial().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
})








module.exports = router;