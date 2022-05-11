import React from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import Form from './components/Form';

export default function Routes() {
    return (
        <Routers>
            <Route path='/' element={<Form />} />
        </Routers>
    )
}
