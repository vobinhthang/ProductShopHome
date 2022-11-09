import React, { useEffect, useState } from 'react'
import axios from 'axios';

const fetchHooks = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async() => {
    try {
      const {data: response} = await axios.get(url);
      console.log(response);
      setData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  
  
   useEffect(() => {
    fetchData(); 
  }, []);
  
  return (
    {
        data, loading, error
    }
  )
}

export default fetchHooks