import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/slices/authSlice.js';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function logOutHandle() {
        dispatch(setAuth(false))
        localStorage.removeItem('token')
        navigate('/');
    }

    return (
        <button onClick={() => logOutHandle()} className={'btn'}>Logout</button>
    );
}

export default Logout;