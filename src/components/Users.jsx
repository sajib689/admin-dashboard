import { useEffect, useState } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="flex items-center justify-between p-2 border-b">
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;