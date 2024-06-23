import { useHistory } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";

const Login = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/register");
    }

    useEffect(() => {
        axios.get(`http://localhost:8083/api/user/v1/testapi`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
            })
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center">

                        <button type='button' onClick={handleClick} className="btn btn-primary">Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login