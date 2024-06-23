import { useHistory } from "react-router-dom";
const Register = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password Confirm</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" onClick={handleClick} className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register