import React from 'react';
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';
import { useState } from 'react';


export default function Sidebar() {
    const {
        user: {fullName, username, userId}
    } = useUser();
    const [test, setTest] = React.useState();
    return (
        <div className='p-4'>
            <User username={username} fullName={fullName}/>
            <Suggestions userId={userId}/>
        </div>

    );
}