import { useForm } from '../hooks/useForm';

type FormValues = {
    email:string;
    name:string;
    age:number;
}

export const Form = () => {
    const { email, name, age, handleInputChange } = useForm<FormValues>({
        email: 'luislecompt@gmail.com',
        name: 'Luis Fernando',
        age: 26,
    });

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input 
                    type="number" 
                    name="age" 
                    className="form-control"
                    value={ age }
                    onChange={ handleInputChange }
                />
            </div>

            <pre>{ JSON.stringify({ email, name, age }) }</pre>
        </form>
    )
}