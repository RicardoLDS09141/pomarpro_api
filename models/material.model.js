const conexao = require('../database/connection.database');

//puxa todos
async function getMaterial(){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_material
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}

//busca os materials pelos id
async function getMaterialById(id){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_material where id = ?
            `[id])
            return linhas;
    }catch(erro){
        return erro;
    }
}

//invoca um material no banco de dados
async function addMaterial( 
    nome,
    tipo,
    valor,
   fornecedor){ try{
        const[exec] = await conexao.query(`
            insert into tb_material (  nome,
        tb_tipo_id,
        valor,
       fornecedor) 
        values(?,?,?,?)
            `,[  nome,
                tipo,
                valor,
               fornecedor])
            return exec.affectedRows;
    }catch(erro){
        return erro;
    }

}

//função para buscar todos os usuários do banco
async function buscaTodosMaterial(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
            select 
          	    u.id,
                u.nome,
                u.tb_tipo_id,
                u.valor,
                u.fornecedor

             from tb_material  u;
            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}



module.exports = {
     getMaterial,
     getMaterialById,
     addMaterial,
     buscaTodosMaterial
};