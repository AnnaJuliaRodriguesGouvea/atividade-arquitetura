import { Button, TextField } from '@mui/material';
import { divStyle, contentDivStyle, textFieldStyle, buttonStyles } from '../style/Calculadora.style.js'
import Header from '../component/Header.js';

const Calculadora = () => {
    return (
        <div style={divStyle}>
            <Header/>
            <div style={contentDivStyle}>
                <TextField required id="outlined-basic" label="Nome do Aluno" variant="outlined" style={textFieldStyle}/>
                <TextField required id="outlined-basic" label="Nota 1" variant="outlined" style={textFieldStyle}/>
                <TextField required id="outlined-basic" label="Nota 2" variant="outlined" style={textFieldStyle}/>
                <TextField required id="outlined-basic" label="Nota 3" variant="outlined" style={textFieldStyle}/>
                <TextField required id="outlined-basic" label="Média" variant="outlined" style={textFieldStyle}/>
                <Button style={buttonStyles}>Calcular</Button>
                <Button style={buttonStyles}>Limpar</Button>
            </div>
        </div>
    )
}

export default Calculadora;