const conexao = require('../database/connection.database');

//puxa todos
async function getpomar(){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_pomar
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}

//busca os pomarcads pelos id
async function getpomarById(id){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_pomar where id = ?
            `[id])
            return linhas;
    }catch(erro){
        return erro;
    }
}

//invoca um pomarcad no banco de dados
async function addpomarcad( 
    apelido,
    num_linha,num_coluna){ try{
        const[exec] = await conexao.query(`
            insert into tb_pomar (  apelido,
        num_linha,
        num_coluna) 
        values(?,?,?)
            `,[  apelido,
                num_linha,num_coluna])
            return exec.affectedRows;
    }catch(erro){
        return erro;
    }

}

//função para buscar todos os usuários do banco
async function buscaTodospomarcad(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
            select 
          	    u.id,
                u.apelido,
                u.num_linha,u.num_coluna

             from tb_pomar  u;
            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
     getpomar,
     getpomarById,
     addpomarcad,
     buscaTodospomarcad
};