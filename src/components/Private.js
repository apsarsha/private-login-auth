import { useEffect, useState } from 'react';
import axios from 'axios';

function Private() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/private')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Private Route</h1>
      <p>{data}</p>
    </div>
  );
export default Private;