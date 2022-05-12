import React from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Routers>
            <Route path='/' element={<Home />} />
        </Routers>
    )
}
