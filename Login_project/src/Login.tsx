import * as React from 'react';
import '../bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login