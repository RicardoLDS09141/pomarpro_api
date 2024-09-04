var express = require('express');
var router = express.Router();
const sql = require('../models/produto.model');



router.post('/add',(req,res)=>{
    //guarda as informações em uma variavel para facilitar o acesso
    let dados = req.body.info;
  
    sql.addproduto(
     
      dados.tipo,
      dados.valor,
      dados.descricao,
      dados.unidade_medida
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
      return;
      }
      res.status(201).json(resposta);
  
    })
    
  })



  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosproduto().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
})








module.exports = router;