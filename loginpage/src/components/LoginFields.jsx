import { useState } from 'react';
import axios from 'axios';
import LoginButton from './Button';
// import Home from './Home';
import Styles from './LoginField.module.css';
import SocialLinks from './SocialLinks';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function LoginFields() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [show, setShow] = useState(false);
  const [status, setStatus] = useState([]);
  // const [login,setLogin] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // if (email === 'manju@gmail.com' && password === '123456') {
    //   console.log('successfull');

    //   return setShow(true);
    // } else {
    //   console.log('unsuccessfull');
    //   return setShow(false);
    // }
    try {
      const response = await axios.post('http://localhost:3000/api/user', {
        username,
        password,
      });
      console.log(response);
      setStatus(response.data);
      // setShow(true);
    } catch (error) {
      console.log('Login failed', error);
      setStatus(['Login failed']);
      setUserName('');
      setPassword('');
    }
  }

  function handleSingup(e) {
    e.preventDefault();
  }

  return (
    <div className={Styles.login_container}>
      <form>
        <div className="form-container">
          <div className={Styles.inputfields}>
            <input
              type="text"
              id="userName"
              className={Styles.inputfield}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className={Styles.inputfields}>
            <input
              type="password"
              id="userPassword"
              className={Styles.inputfield}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className={Styles.buttons}>
            <LoginButton
              label="Login"
              onClick={(e) => handleSubmit(e)}
              className={Styles.button}
            />

            <LoginButton
              label="SignUp"
              onClick={(e) => handleSingup(e)}
              className={Styles.button}
            />
          </div>
        </div>
        <h1 className={Styles.result}>{status}</h1>
      </form>
      <div className={Styles.links}>
        <SocialLinks
          image={github}
          alt={'github'}
          link={'https://github.com/Manju299'}
        />
        <SocialLinks
          image={instagram}
          alt={'instagram'}
          link={'https://github.com/Manju299'}
        />
        <SocialLinks
          image={twitter}
          alt={'twitter'}
          link={'https://github.com/Manju299'}
        />
        <SocialLinks
          image={linkedin}
          alt={'linkedin'}
          link={'https://github.com/Manju299'}
        />
      </div>
    </div>
  );
}
