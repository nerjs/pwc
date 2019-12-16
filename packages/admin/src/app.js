import React from 'react'
import Wrappers from '@data/wrappers'
import Header from '@comp/header'
import { Route, Switch } from 'react-router-dom'
import HomeRoute from './routes/home'
import MapRoute from './routes/map'
import ListRoute from './routes/list'
import AddRoute from './routes/add'
import EditRoute from './routes/edit'

const App = () => (
    <Wrappers>
        <Header />
        <Switch>
            <Route path="/" component={HomeRoute} exact />
            <Route path="/map/:pos?/:showId?" component={MapRoute} />
            <Route path="/list" component={ListRoute} />
            <Route path="/add" component={AddRoute} />
            <Route path="/edit/:id" component={EditRoute} />
        </Switch>
    </Wrappers>
)

export default App
