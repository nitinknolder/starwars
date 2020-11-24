import React, { useState } from 'react';
import { authenticate } from '../../api-calls';
import { useHistory } from 'react-router-dom';
import { useAppStateContext } from '../../redux/reducers';
import { LOGIN_SUCCESSFUL } from '../../redux/actions/actionTypes';
import useCustomInputField from '../../custom-hooks/input-hook';

export const Login = () => {
  
  const history = useHistory();
  const { dispatch } = useAppStateContext();
  const userNameProps = useCustomInputField('');
  const { value: userName } = userNameProps;
  const passwordProps = useCustomInputField('');
  const { value: password } = passwordProps;
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = async () => {
    if (!userName || !password) {
      setErrorMessage('User Name or Password can not be blank!');
      return;
    }
    setErrorMessage('Please wait...');
    const { isAuthenticated, error } = await authenticate(userName, password);
    if (error) {
      setErrorMessage(error);
      return;
    }
    if (isAuthenticated) {
      dispatch({ type: LOGIN_SUCCESSFUL, userName });
      history.push('/');
    } else {
      setErrorMessage('Invalid Username or Password');
    }
  };

  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <hr className="mb-5" />
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card card-outline-secondary">
                <div className="card-header">
                  <h3 className="mb-0">Xebia Login</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="userName">
                      User Name
              </label>
                    <input
                      className="form-control"
                      {...userNameProps}
                      placeholder="User Name"
                      name="userName" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password">
                      Password
              </label>
                    <input
                      className="form-control"
                      {...passwordProps}
                      placeholder="Password"
                      type="password"
                      name="password" />
                  </div>
                  <div className="mb-4">
                    <button type="submit" className="btn btn-success btn-md float-right" id="btnLogin" onClick={loginUser}>Login</button>
                  </div>
                  { (errorMessage === 'User Name or Password can not be blank!' || errorMessage === 'Invalid Username or Password') ? 
                    <p style={{color: "red"}}>{errorMessage}</p> :
                    <p style={{color: "blue"}}>{errorMessage}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </section>
  );
}
