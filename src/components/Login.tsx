import { useReducer } from "react"

interface initialLoginState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

type AuthAction = { type: string, payload: Object}

const initialState: initialLoginState = {
  validating: true,
  token: null,
  username: '',
  name: ''
}

const authReducer = (state: initialLoginState, action: AuthAction): initialLoginState => {
  return {
    ...initialState
  }
};

export const Login = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

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
