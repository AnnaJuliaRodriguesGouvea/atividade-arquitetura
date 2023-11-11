import { AlunoDao } from "../dao/AlunoDao";
import Aluno from "../model/Aluno"; 

//Camada 2
export const calcularMedia = (nota1, nota2, nota3) => {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2)
}

export const inserirAluno = async (nome, nota1, nota2, nota3, media) => {
    console.log("Aluno", nome, nota1, nota2, nota3, media)
    await AlunoDao.inserir(new Aluno(nome, nota1, nota2, nota3, media))
}

export const listarMedias = async () => {
    return await AlunoDao.listar()
}