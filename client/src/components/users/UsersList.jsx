import React, { useEffect, useState, useContext } from 'react';
import userService from '../../services/userService';


export default function UsersList(props) {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '' });

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
        setNewUser({ firstName: '', lastName: '' });
    }

    return (
        <div>
            <div>
                <h1>new user:</h1>
        first name:<input value={newUser.firstName} name='firstName' onChange={updateFormState}></input>
        last name:<input value={newUser.lastName} name='lastName' onChange={updateFormState}></input>
        <button onClick={add}>add user</button>

            </div>

            <div>
                users list: {
                    users.map(user => <>
                        <div>
                            {user.id} {user.firstName} {user.lastName}
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}