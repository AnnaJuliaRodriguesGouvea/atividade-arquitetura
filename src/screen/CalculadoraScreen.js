import { Button, TextField } from '@mui/material';
import { divStyle, contentDivStyle, textFieldStyle, buttonStyles } from '../style/Calculadora.style.js'
import Header from '../component/Header.js';
import { useState } from 'react';
import { calcularMedia, inserirAluno } from '../service/CalculadoraService.js'

const Calculadora = () => {
    const [nome, setNome] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [media, setMedia] = useState("");

    const handleCalcularButton = async () => {
        if (nota1 !== "" && nota2 !== "" && nota3 !== "") {
            let mediaCalculada = calcularMedia(Number(nota1), Number(nota2), Number(nota3))
            setMedia(String(mediaCalculada))
            await inserirAluno(nome, Number(nota1), Number(nota2), Number(nota3), mediaCalculada)
        }
    }

    const handleLimparButton = () => {
        setNome("")
        setNota1("")
        setNota2("")
        setNota3("")
        setMedia("")
    }

    return (
        <div style={divStyle}>
            <Header/>
            <div style={contentDivStyle}>
                <TextField 
                    required 
                    id="outlined-basic" 
                    label="Nome do Aluno" 
                    variant="outlined" 
                    style={textFieldStyle}
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}/>
                <TextField 
                    required 
                    id="outlined-basic" 
                    label="Nota 1" 
                    variant="outlined" 
                    style={textFieldStyle} 
                    value={nota1}
                    onChange={(event) => {setNota1(event.target.value)}}/>
                <TextField 
                    required 
                    id="outlined-basic" 
                    label="Nota 2" 
                    variant="outlined" 
                    style={textFieldStyle} 
                    value={nota2}
                    onChange={(event) => {setNota2(event.target.value)}}/>
                <TextField 
                    required 
                    id="outlined-basic" 
                    label="Nota 3" 
                    variant="outlined" 
                    style={textFieldStyle} 
                    value={nota3}
                    onChange={(event) => {setNota3(event.target.value)}}/>
                <TextField 
                    disabled
                    id="outlined-basic" 
                    label="Média" 
                    variant="outlined"
                    style={textFieldStyle} 
                    value={media}/>
                <Button onClick={handleCalcularButton} style={buttonStyles}>Calcular</Button>
                <Button onClick={handleLimparButton} style={buttonStyles}>Limpar</Button>
            </div>
        </div>
    )
}

export default Calculadora;