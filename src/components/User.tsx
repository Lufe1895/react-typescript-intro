import { useState } from "react"

interface Auth {
    uid: string,
    name: string,
}

const tempUser:Auth = {
    uid: '123ABC',
    name: 'Fernando'
}

export const User = () => {
    const [user, setUser] = useState<Auth>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Luis'
        });
    }

    return (
        <div className="mt-5">
            <h4>Usuario</h4>

            <button
                className="btn btn-outline-primary"
                onClick={ login }
            >
                Login
            </button>

            {
                user ?
                    <pre>{ JSON.stringify(user) }</pre>
                :
                    <pre>No hay usuario</pre>
            }
        </div>
    )
}