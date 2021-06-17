
export const Login = () => {
  return (
    <>
     <h3>Login</h3>
     <hr/>
     <div className="aler alert-info">Validating...</div>
     <div className="aler alert-danger">Not Authenticated</div>
     <div className="aler alert-success">Authenticated</div>

     <button className="btn btn-primary">
       Login
     </button>

     <button className="btn btn-danger">
       Logout
     </button>

    </>
  )
}
