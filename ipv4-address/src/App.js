import style from './style.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setIP] = useState('');
  
  const getIP = async () => {
    const response = await axios.get('https://api.ipify.org/?format=json')

    setIP(response.data.ip)
  }

  useEffect(() => {
    getIP()
  }, [])

  return (
    <div className={style.wrapper}>
      <h1>{data}</h1>
      <p>{data} (This is your IP address ..probably :D)</p>
    </div>
  );
}

export default App;
