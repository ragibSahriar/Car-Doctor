import img from '../../../assets/assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        console.log('login')
        
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
            <h1 className="text-5xl text-center font-bold text-orange-600">Login</h1>
            
            {/* form ////////////////  */}

        <form onSubmit={handleLogin}>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
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
                <input className='btn btn-primary' type="submit" name='submit' value='login' />
              </div>
        </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
