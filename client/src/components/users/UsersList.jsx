import React, { useEffect, useState, useContext } from 'react';
import userService from '../../services/userService';


export default function UsersList(props) {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', password: '' });

    useEffect(() => //initial
    {
        getUsers();

        // eslint-disable-next-line
    }, []);

    const getUsers = async () => {
        let _users = await userService.get();
        setUsers(_users);
    }

    const updateFormState = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    };

    const add=async()=>{
        let userId=await userService.post(newUser);
        getUsers();
        setNewUser({ name: '', password: '' });
    }

    return (
        <div>
            <div>
                <h1>new user:</h1>
        name:<input value={newUser.name} name='name' onChange={updateFormState}></input>
        password:<input value={newUser.password} name='password' onChange={updateFormState}></input>
        <button onClick={add}>add user</button>

            </div>

            <div>
                users list: {
                    users.map(user => <>
                        <div>
                            {user.id} {user.name} {user.password}
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}