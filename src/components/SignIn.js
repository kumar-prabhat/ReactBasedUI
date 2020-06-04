import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import logo from '../images/logo-icon.png';

const SignIn = (props) => {
  const [loader, setLoader] = useState(true);
  const [check, setCheck] = useState(true);
  const { history } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('./index');
  };

  return (
    <Fragment>
      {loader && (
        <Fragment>
          <div id='pageloader-overlay' className='visible incoming'>
            <div className='loader-wrapper-outer'>
              <div className='loader-wrapper-inner'>
                <div className='loader'></div>
              </div>
            </div>
          </div>
          <div className='loader-wrapper'>
            <div className='lds-ring'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Fragment>
      )}
      <div className='card card-authentication mx-auto my-5'>
        <div className='card-body'>
          <div className='card-content p-2'>
            <div className='text-center'>
              <img src={logo} alt='logo icon' />
            </div>
            <div className='card-title text-uppercase text-center py-3'>
              Sign In
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='exampleInputUsername' className='sr-only'>
                  Username
                </label>
                <div className='position-relative has-icon-right'>
                  <input
                    type='text'
                    id='exampleInputUsername'
                    className='form-control input-shadow'
                    placeholder='Enter Username'
                    required
                  />
                  <div className='form-control-position'>
                    <i className='fa fa-user'></i>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword' className='sr-only'>
                  Password
                </label>
                <div className='position-relative has-icon-right'>
                  <input
                    type='password'
                    id='exampleInputPassword'
                    className='form-control input-shadow'
                    placeholder='Enter Password'
                    required
                  />
                  <div className='form-control-position'>
                    <i className='fa fa-unlock-alt'></i>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-6'>
                  <div className='icheck-material-white'>
                    <input
                      type='checkbox'
                      id='user-checkbox'
                      checked={check}
                      onChange={() => {
                        setCheck(!check);
                      }}
                    />
                    <label htmlFor='user-checkbox'>Remember me</label>
                  </div>
                </div>
                <div className='form-group col-6 text-right'>
                  <a href='authentication-reset-password.html'>
                    Reset Password
                  </a>
                </div>
              </div>
              <button type='submit' className='btn btn-light btn-block'>
                Sign In
              </button>
              <div className='text-center mt-3'>Sign In With</div>

              <div className='form-row mt-4'>
                <div className='form-group mb-0 col-6'>
                  <button type='button' className='btn btn-light btn-block'>
                    <i className='fa fa-facebook-square'></i> Facebook
                  </button>
                </div>
                <div className='form-group mb-0 col-6 text-right'>
                  <button type='button' className='btn btn-light btn-block'>
                    <i className='fa fa-twitter-square'></i> Twitter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='card-footer text-center py-3'>
          <p className='text-warning mb-0'>
            Do not have an account?
            <a href='authentication-signup.html'> Sign Up here</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(SignIn);
