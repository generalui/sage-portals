import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.css'
import { Footer } from './Footer'
import AppInitializer from './AppInitializer'
import { Navbar } from './Navbar'
import { CookiesProvider } from 'react-cookie'
const Home = React.lazy(() => import('./Home'))
const RouteResolver = React.lazy(() => import('./RouteResolver'))

const App: React.SFC<{}> = ({}) => {
  return (
    <CookiesProvider>
      <HashRouter>
        <AppInitializer>
          <Navbar/>
          <main className="main">
            {/* all the content below */}
            <React.Suspense fallback={<div/>}>
              <Switch>
                {/* exact takes precendence over RouteResolver */}
                <Route exact={true} path="/" component={Home}/>
                {/* all other routes handled programatically */}
                <Route path="/" component={RouteResolver}/>
              </Switch>
            </React.Suspense>
          </main>
          <Footer/>
        </AppInitializer>
      </HashRouter >
    </CookiesProvider>
  )
}

export default App