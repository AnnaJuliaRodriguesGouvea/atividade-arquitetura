import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Header from '../component/Header.js';
import { divStyle, contentDivStyle, titleStyle, textStyle } from '../style/Lista.style.js'
import {useEffect, useState} from "react";
import {listarMedias} from "../service/CalculadoraService";

const Lista = () => {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        const fetchMedias = async () => {
            try {
                const data = await listarMedias();
                setMedias(data.docs);
            } catch (error) {
                console.error("Error fetching medias: ", error);
            }
        };

        fetchMedias();
    }, []);

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
                    {medias?.map((doc, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell style={textStyle} component="th" scope="row">
                            {doc.data().nome}
                        </TableCell>
                        <TableCell style={textStyle} align="right">{doc.data().nota1}</TableCell>
                        <TableCell style={textStyle} align="right">{doc.data().nota2}</TableCell>
                        <TableCell style={textStyle} align="right">{doc.data().nota3}</TableCell>
                        <TableCell style={textStyle} align="right">{doc.data().media}</TableCell>
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