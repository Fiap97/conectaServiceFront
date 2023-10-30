import React, {Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from './Componentes/Paginas/Inicio';
import { Login } from './Componentes/Paginas/Login';
import { Registro } from './Componentes/Paginas/Registro';

export function App () {
    return(
        <Routes>
            <Route path='/' element={
                <Inicio/>
            }>
            </Route>
            <Route path='/login' element={
                <Login/>
            }>
            </Route>
            <Route path='/register' element={
                <Registro/>
            }>
            </Route>
        </Routes>
    )
}