const conexao = require('../database/connection.database');


//função para buscar todos os usuários do banco
async function buscaTodoshome(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
           select
    t.descricao as t_descricao,
   sum(mi.quantidade) as quantidade,
   p.id,
    p.descricao as p_descricao
 from tb_movimentacao m
	inner join mov_item mi 
    inner join tb_produtos p
    inner join tb_tipo t
where 1=1
	and t.descricao = 'entrada'
	and p.descricao <> 'teste'
group by p.id, t.descricao

            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}

async function buscaTodoshome(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
           select
    t.descricao as t_descricao,
   sum(mi.quantidade) as quantidade,
   p.id,
    p.descricao as p_descricao
 from tb_movimentacao m
	inner join mov_item mi 
    inner join tb_produtos p
    inner join tb_tipo t
where 1=1
	and t.descricao = 'saida'
	and p.descricao <> 'teste'
group by p.id, t.descricao

            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}


module.exports = {
     buscaTodoshome,
     buscaTodoshome
};