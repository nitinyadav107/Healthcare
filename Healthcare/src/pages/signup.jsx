import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
function Signup() {
    return (<>
        <form className='formpage form-control'>

            <h1 className="h3 mb-3 fw-normal heading">Sign in </h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Create Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Check Password</label>
            </div>

            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button className="btn btn-primary login" type="submit">Sign in</button>

        </form>

    </>);
}
export default Signup