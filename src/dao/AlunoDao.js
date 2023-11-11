//Camada 3
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "../config/firebaseConfig";

export const AlunoDao = {
    inserir: async function(aluno) {
        const data = {
            nome: aluno.nome,
            nota1: aluno.nota1,
            nota2: aluno.nota2,
            nota3: aluno.nota3,
            media: aluno.media
        }

        try {
            await addDoc(collection(db, "aluno"), data)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    },

    listar: async function() {
        try {
            return await getDocs(collection(db, "aluno"));
        } catch (e) {
            console.error("Error list documents: ", e);
        }
    },
}