import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import TeamView from './Components/TeamView/TeamView'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <NavBar/>
        <main className="has-background-light">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile/:teamName" component={TeamView} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
