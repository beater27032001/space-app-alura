import styled from "styled-components"
import CampoTexto from "../../CampoTexto";
import Logo from "../../../public/imagens/logo.png"

const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
`

const LogoEstilizado = styled.img`
    width: 212px;
`

const Cabecalho = ({setFiltro}) => {
    return (  
    <HeaderEstilizado>
        <LogoEstilizado src={Logo} alt="ícone da logo"/>
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>)
}

export default Cabecalho;