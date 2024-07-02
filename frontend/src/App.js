import './App.css';
// import Navbar from './components/navbar';
import Home from './pages/home';
import Auth from './pages/auth';
import Quotes from './pages/quotes';

// import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  // const [quoteData, setQuoteData] = useState(null);

  // const getQuote = (val)=>{
  //   setQuoteData(val);
  // }
  
  // console.log("quoteData",quoteData);
  
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/quotes" element={<Quotes/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
