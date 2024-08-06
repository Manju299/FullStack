import { useState } from 'react';
import Styles from './Pastebin.module.css';
import axios from 'axios';

export default function Pastbin() {
  const [content, setContent] = useState('');
  const [url, setURL] = useState('');
  const [error, setError] = useState();

  async function handleClick() {
    if (content != '') {
      const response = await axios.post('http://localhost:3000/url', {
        content,
      });
      console.log('Button clicked and recieved the value', response);
      setURL(response.data.shortId);
    } else {
      setError('Enter the content');
      console.log(error);
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <textarea
          className={Styles.textarea}
          value={content}
          rows="4"
          cols={50}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className={Styles.textarea}
          type="submit"
          onClick={() => handleClick()}
        >
          send
        </button>
      </div>
      <div>http:localhost:5173/url/{url}</div>
    </>
  );
}
