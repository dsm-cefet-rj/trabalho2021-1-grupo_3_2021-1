import React from 'react';
import {logoutServer} from '../paginas/utilitarios/LoginSlice';
import {useDispatch, useSelector} from 'react-redux';

function HandleLogout () {

        useDispatch(logoutServer());
        localStorage.removeItem('token');
    return (
        <>
       </>
    )};

export {HandleLogout};