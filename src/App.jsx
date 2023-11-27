import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import LoaderContextProvider from './Context/LoaderContext/LoaderContextProvider.jsx'

function App() {


  return (
    <>
      <Header />
      <LoaderContextProvider>
        <Outlet />
      </LoaderContextProvider>
      <Footer />
    </>
  )
}

export default App
