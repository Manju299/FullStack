import { useEffect, useState } from 'react';
import Styles from './content.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Content() {
  const { shortId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // console.log(shortId);
        const response = await axios.get(
          `http://localhost:3000/url/${shortId}`,
        );
        console.log(response);
        setContent(response.data.redirectURL);
      } catch {
        console.log('nothing');
      }
    };
    fetchContent();
  }, [shortId]);

  return <div className={Styles.content}>{content}</div>;
}
