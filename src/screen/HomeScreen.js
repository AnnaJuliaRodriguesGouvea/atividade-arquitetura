import { Typography } from "@mui/material"
import Header from "../component/Header.js"
import { divStyle, titleStyle, textStyle } from '../style/Home.style.js'

const Home = () => {
    return(
        <div style={divStyle}>
            <Header/>
            <Typography variant="h3" align="center" sx={titleStyle}>Olá,</Typography>
            <Typography variant="body1" align="center" sx={textStyle}> 
                Aqui é possível realizar o cálculo de médias e lista-las!
            </Typography>
        </div>
    )
}

export default Home