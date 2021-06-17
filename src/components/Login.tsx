import { useEffect, useReducer } from "react";

interface initialLoginState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

type LoginActionPayload = { username: string, name: string }

type AuthAction = 
  | { type: 'logout'} 
  | {type: 'login', payload: LoginActionPayload};

const initialState: initialLoginState = {
  validating: true,
  token: null,
  username: '',
  name: ''
}

const authReducer = (state: initialLoginState, action: AuthAction): initialLoginState => {

  switch (action.type) {
    case 'login':
      const { name, username } = action.payload;
      return {
        ...state,
        validating: false,
        token: 'ABC123',
        name,
        username
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

  const [{validating, token, name}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'logout'})
    }, 1500)
  }, []);

  const login = () => dispatch({type: 'login', payload: { username: 'testUser', name: 'test'}});
  const logout = () => dispatch({type: 'logout'});

  if(validating) {
    return (
      <div className="aler alert-info">Validating...</div>
    )
  }

  return (
    <>
     <h3>Login</h3>
     <hr/>
     {
       (token ? <div className="aler alert-success">Authenticated as {name}</div> : <div className="aler alert-danger">Not Authenticated</div>)
     }
     {
       (token) ? 
        (
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        ) : 
        (
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        )

     }
    </>
  )
}
