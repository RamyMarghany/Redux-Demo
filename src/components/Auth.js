import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authentication';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  // to retrieve a specific data from the store that has combined reducers we need to mention the reducer name like (auth), and you can configure that from the file of the store where you configured the store and the combined reducers together.
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login())
  }
  return (
    <>
      {!isAuthenticated && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
