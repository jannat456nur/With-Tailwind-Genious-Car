import React from 'react'
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }
  return (
    <div><div className="hero w-full my-20">
    <div className="grid  gap-6 hero-content flex-col lg:flex-row grid md:grid-cols-2">
      <div className="text-center lg:text-left">
        <img className='w-3/4' src={img}></img>
      
        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-5xl font-bold text-center">Login</h1>
        <form  onClick={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type='submit' value='login'></input>
         
          </div>
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Login