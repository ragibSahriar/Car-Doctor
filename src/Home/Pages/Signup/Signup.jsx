import { Link } from "react-router-dom";
import img from "../../../assets/assets/images/login/login.svg";
import { useContext } from "react";

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        createUser(name, email, password)
        .then(result => {
            const user = 
        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl text-center font-bold text-orange-600">
                  Sign Up
                </h1>
  
                {/* form ////////////////  */}
  
                <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      name="submit"
                      value="Sign up"
                    />
                  </div>
                </form>
  
                <p className="my-4 text-center text-sm">
                  ALready a member{" "}
                  <Link to="/login" className="text-orange-600 font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;