const conexao = require('../database/connection.database');

async function getUsuarios(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_usuario    
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}

//Busca os usuarios pelo ID
async function getUsuarioByid(ID){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_usuario where id = ?  
            `,[ID])
            return linhas;
    }catch(erro){
        return erro
    }
}

//Insere usuario no banco de dados
async function addUsuario(
    nome,
    sobrenome,
    endereco,
    telefone,
    email,
    login,
    senha){

        try{
            const [exec] = await conexao.query(`
              insert into tb_usuario(
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

    async function autenticaUsuario(usuario,senha){
        try{
            let[linha]= await conexao.query(`
                select
                id
                from tb_usuario
                where 1=1
                and login = ?
                and senha = ?`,[usuario,senha])
                return linha;
        }catch(e){
            return e;
        }
    }






module.exports = {
     getUsuarios,
     getUsuarioByid,
     addUsuario,
     autenticaUsuario

}