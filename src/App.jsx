import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import BannerBackround from "./assets/banner.png"
import Galeria from "./componentes/Galeria"

import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotosSelecionada, setFotosSelecionada] = useState(null)
  const [tag, setTag] = useState(0)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId == tag
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) =>{
    if(foto.id === fotosSelecionada?.id){
      setFotosSelecionada({
        ...fotosSelecionada,
        favorita: !fotosSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return{
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral/>
          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={BannerBackround}/>
            <Galeria aoFotoSelecionada={foto => setFotosSelecionada(foto)} fotos={fotosDaGaleria} aoAlternarFavorito={aoAlternarFavorito} setTag={setTag}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape/>
      <ModalZoom foto={fotosSelecionada} aoFechar={() => setFotosSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  )
}

export default App
