import Navbar from './Navbar'

const Register = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
        <div className='row registerContainer justify-content-center align-items-center'>
            <div className='col col-10 col-lg-5 registerForm p-4'>
                <div>
                    <h2 className='pb-3 text-center'>Registration</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">User Name:</label>
                            <input type="text" className="form-control" name="name" required placeholder='Enter Your Name' />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" required placeholder='Enter your Email' />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" name="password" required placeholder='Enter your Password' />
                        </div>       
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>        
        </div>
    </div>
    </>
         
  )
}

export default Register