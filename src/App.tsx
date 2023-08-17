import Header from "./Components/Header/HeaderComponent"
import PrincipalMain from "./Components/Main/MainPrincipal/Mainprincipal"
import MainPratoTradicional from "./Components/Main/MainPrato/MainPrato"
import MainPratosPopulares from "./Components/Main/MainPratosPopulares/MainPopulares"
import MainComentarios from "./Components/Main/MainComentarios/MainComentarios"
import MainLocalizacao from "./Components/Main/MainLocalizacao/MainLocal"
import Footer from "./Components/Footer/FooterComponent"

function App() {
  return (
    <>
      <Header/>
      <PrincipalMain/>
      <MainPratoTradicional/>
      <MainPratosPopulares/>
      <MainComentarios/>
      <MainLocalizacao/>
      <Footer/>
    </>
  )
}

export default App
