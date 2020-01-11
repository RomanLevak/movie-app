import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import MoviesList from './components/MoviesList'
import MovieInfo from './components/MovieInfo'

function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>
          <Link className="app-header__title" to="/">movie-app</Link>
        </h1>
      </header>
      <Switch>
        <Route path="/:id"
          render = {({match}) =>
            <MovieInfo key={match.params.id}
              id={match.params.id}
            />
          }
        />
        <Route>
          <MoviesList type="popular" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
