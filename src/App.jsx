import { useState } from 'react'

import Banner from './components/Banner'
import { Header } from './components/Header'
import { MP as MainPage} from './components/MainPage'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import  Contact  from './components/Contact'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <MainPage></MainPage>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Banner></Banner>
      <Contact></Contact>
    </>
  )
}

export default App
