const conexao = require('../database/connection.database');

async function getMateriais(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material    
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca os materiais pelo ID
async function getMaterialByid(ID){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material where id = ?  
            `,[ID])
            return linhas;
    }catch(erro){
        return erro
    }
}

//Insere material no banco de dados
async function addMaterial(
    nome,
    sobrenome,
    endereco,
    telefone,
    email,
    login,
    senha){

        try{
            const [exec] = await conexao.query(`
              insert into tb_material(
            nome,
            sobrenome,
            endereco,
            telefone,
            email,
            login,
            senha) 
            values(?,?,?,?,?,?,?)
                `,[nome,
                    sobrenome,
                    endereco,
                    telefone,
                    email,
                    login,
                    senha])
                return exec.affectedRows
        }catch(erro){
            return erro
        }
    }

    async function autenticaMaterial(material,senha){
        try{
            let[linha]= await conexao.query(`
                select
                id
                from tb_material
                where 1=1
                and login = ?
                and senha = ?`,[material,senha])
                return linha;
        }catch(e){
            return e;
        }
    }

//Função para buscar todos os usuários do banco
async function buscaTodosMateriais(){
    //Estrutura de tentativa try..catch 
    //capturar erros
    try{
        //Abre conexão e informa a query
        let [linhas] = await conexao.query(`
            select 
	            u.id,
                u.nome,
                u.sobrenome,
                u.telefone,
                u.email,
                u.login
            from tb_material u;
        `)
    //Retorna valores buscados do banco
    return linhas;
    }catch(e){
        //Retorna o erro que aconteceu
        return e;
    }
}




module.exports = {
     getMateriais,
     getMaterialByid,
     addMaterial,
     autenticaMaterial,
     buscaTodosMateriais

}