import { useEffect, useReducer } from "react";

interface initialLoginState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

type AuthAction = { type: string}

const initialState: initialLoginState = {
  validating: true,
  token: null,
  username: '',
  name: ''
}

const authReducer = (state: initialLoginState, action: AuthAction): initialLoginState => {

  switch (action.type) {
    case 'login':
      return {
        ...state,
        validating: false,
        token: 'ABC123'
      }
    case 'logout':
      return {
        ...state,
        validating: false,
        token: null,
        username: '',
        name: ''
      }
    default:
      return state;
  }
};

export const Login = () => {

  const [{validating}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'logout'})
    }, 1500)
  }, []);

  if(validating) {
    return (
      <div className="aler alert-info">Validating...</div>
    )
  }

  return (
    <>
     <h3>Login</h3>
     <hr/>
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
