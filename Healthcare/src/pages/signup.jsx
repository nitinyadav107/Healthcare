// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './login.css';
// import axios from 'axios';

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:8000/api/auth/signup', {
//                 email,
//                 password,
//             });

//             setMessage(response.data.message);
//             setError('');
//         } catch (err) {
//             setError(err.response?.data?.error || 'An error occurred');
//         }
//     };

//     return (
//         <form className='formpage form-control' onSubmit={handleSubmit}>
//             <h1 className="h3 mb-3 fw-normal heading">Sign Up</h1>
//             <div className="form-floating">
//                 <input
//                     type="email"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="floatingInput">Email address</label>
//             </div>
//             <div className="form-floating">
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label htmlFor="floatingPassword">Create Password</label>
//             </div>
//             <div className="form-floating">
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPasswordConfirm"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
//             </div>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {message && <div className="alert alert-success">{message}</div>}
//             <div className="form-check text-start my-3">
//                 <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
//                 <label className="form-check-label" htmlFor="flexCheckDefault">
//                     Remember me
//                 </label>
//             </div>
//             <button className="btn btn-primary login" type="submit">Sign Up</button>
//         </form>
//     );
// }

// export default Signup;




// src/Signup.js
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Your custom CSS
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/auth/signup', {
                email,
                password,
            });

            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <form className='formpage form-control' onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal heading">Sign Up</h1>
            <div className="form-floating">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Create Password</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPasswordConfirm"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}
            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button className="btn btn-primary login" type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
