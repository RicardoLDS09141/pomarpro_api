const conexao = require('../database/connection.database');

//puxa todos
async function getcolheita(){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_colheita
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}

//busca os colheita pelos id
async function getcolheitaById(id){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_colheita where id = ?
            `[id])
            return linhas;
    }catch(erro){
        return erro;
    }
}

//invoca um colheita no banco de dados
async function addcolheita(
            quantidade, 
            dt_colheita,
            tb_arvore_id
){ try{
        const[exec] = await conexao.query(`
            insert into tb_colheita ( 
                quantidade,
                dt_colheita,
                tb_arvore_id
            )values(
                ?,
                ?,
                ?
            )
            `,[  quantidade,dt_colheita,tb_arvore_id])
            return exec.affectedRows;
    }catch(erro){
        return erro;
    }

}

//função para buscar todos os usuários do banco
async function buscaTodoscolheita(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
            select 
          	    u.id,
                u.quantidade,
                u.dt_colheita,
                u.tb_arvore_id
             from tb_colheita  u;
            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
     getcolheita,
     getcolheitaById,
     addcolheita,
     buscaTodoscolheita
};