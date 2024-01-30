import React from 'react';
import { useState } from "react";
import './App.scss';
import '../node_modules/bootstrap/';
import UserList from './components/UserList/UserList';
import UserDetials from './components/userDetials/userDetials';
// import trail from './components/trail/Trail';
import Trail from './components/Trail/Trail';
import User from './Model/User';

function App() {
    return <div>
        <UserList
        ></UserList>
    
    </div>
}

export default App;
