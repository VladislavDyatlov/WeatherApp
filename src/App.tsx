import { useEffect, useState } from 'react';
import { Index } from './component';
import './App.css';
import { Loader } from './Loader/Loader';

function App() {

  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500)
  }, []);

  return (
    <>
      {spinner ? (
        <Loader />
      ) : (
        <div className="main">
          <Index />
        </div>
      )}
    </>
  );
}

export default App;
