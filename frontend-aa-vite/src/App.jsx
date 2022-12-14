import { HashRouter, Route, Routes } from "react-router-dom"
import { ContactPage } from "./components/ContactPage"
import {HomePage} from "./components/HomePage"
import { MenuNav } from "./components/MenuNav"
import { NotFound } from "./components/NotFound"


function App() {

  return (
    <HashRouter>
      <MenuNav/>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contacto" element={<ContactPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
