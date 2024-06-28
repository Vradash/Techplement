import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {
  const [data,setData] = useState();
  const [quote, setQuote] = useState({text: 'Life is a learning experience, only if you learn.', author: 'Yogi Berra'});

  useEffect(()=>{
    axios.get("https://type.fit/api/quotes")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[]) 

  const random= ()=>{
    if(data!=undefined)
    setQuote(data[Math.floor(Math.random() * data.length)]);
  }
  
  return (
    <>
      <div className="quote-wrapper">
        <h2>Quote of the Day</h2>
        <div className="quote-content">
          <h3>{(quote!=undefined)? quote.text:"loading..."}</h3>
          <h4>-{(quote!=undefined)? quote.author.split(',')[0]:"Loading..."}</h4>
        </div>
        <button onClick={()=>random()}>New Quote</button>
    </div>
    </>
  );
}

export default App;
