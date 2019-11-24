import React from 'react'
import Wrappers from '@data/wrappers'
import Header from '@comp/header'
import { Route, Switch } from 'react-router-dom'
import HomeRoute from './routes/home'
import MapRoute from './routes/map'
import ListRoute from './routes/list'
import AddRoute from './routes/add'

const App = () => (
    <Wrappers>
        <Header />
        <Switch>
            <Route path="/" component={HomeRoute} exact />
            <Route path="/map/:pos?" component={MapRoute} />
            <Route path="/list" component={ListRoute} />
            <Route path="/add" component={AddRoute} />
        </Switch>
    </Wrappers>
)

export default App
