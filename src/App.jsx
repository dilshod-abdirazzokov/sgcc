import React, { useState, useEffect } from 'react';

// custom style
import './App.css';

// component
import HomePage from './pages/HomePage';
import Spinner from "./components/spinner/Spinner"



function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an async operation (e.g., data fetching)
    setTimeout(() => {
      // Fetch your data here and set it in the state
      setData({ name: 'John Doe' });
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Spinner />;
  }


  return (
    <>
     <HomePage /> 
    </>
  )
}

export default App
