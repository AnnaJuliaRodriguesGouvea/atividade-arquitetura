import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Header from '../component/Header.js';
import { divStyle, contentDivStyle, titleStyle, textStyle } from '../style/Lista.style.js'

function createData(nome, nota1, nota2, nota3, media) {
    return { nome, nota1, nota2, nota3, media };
}
  
const rows = [
    createData('Anna', 10.0, 9.5, 10.0, 9.83),
    createData('Joao', 9.0, 9.0, 9.0, 9.0),
    createData('Maria', 8.0, 6.0, 5.0, 6.33),
    createData('Felipe', 10.0, 8.5, 9.0, 9.16),
];

const Lista = () => {
    return (
        <div style={divStyle}>
            <Header/>
            <div style={contentDivStyle}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={titleStyle}>Nome do Aluno</TableCell>
                        <TableCell style={titleStyle} align="right">Nota 1</TableCell>
                        <TableCell style={titleStyle} align="right">Nota 2</TableCell>
                        <TableCell style={titleStyle} align="right">Nota 3</TableCell>
                        <TableCell style={titleStyle} align="right">Média</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.nome}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell style={textStyle} component="th" scope="row">
                            {row.nome}
                        </TableCell>
                        <TableCell style={textStyle} align="right">{row.nota1}</TableCell>
                        <TableCell style={textStyle} align="right">{row.nota2}</TableCell>
                        <TableCell style={textStyle} align="right">{row.nota3}</TableCell>
                        <TableCell style={textStyle} align="right">{row.media}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Lista;