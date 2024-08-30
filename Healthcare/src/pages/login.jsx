/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
            const token = response?.data?.token;

            if (token) {
                localStorage.setItem('token', token);
                setIsLoggedIn(true); // Update login state
                navigate('/'); // Redirect to home page
            } else {
                setError('Login failed, please try again.');
            }
        } catch (err) {
            setError('Invalid credentials. Please try again.');
            console.log(err)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form className="formpage form-control" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal heading">Please Login</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check text-start my-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button
                    className="btn btn-primary login"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default Login;
