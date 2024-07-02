import axios from 'axios';
import {useState,useEffect} from 'react';
import Navbar from '../components/navbar';
import Quotes from './quotes';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const [query,setQuery] = useState("");
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

    const getQuery = (val)=>{
      setQuery(val);
      console.log("home",val);
    }
    
  if(query===""){
    return (
      <>
        <Navbar getQuery={getQuery}/>
        
        <div className="quote-wrapper">
          <h2>Quote of the Day</h2>
          <div className="quote-content">
            <h3>{(quote!=undefined)? quote.text:"loading..."}</h3>
            <h4>-{(quote!=undefined)? quote.author.split(',')[0]:"Loading..."}</h4>
          </div>
          <div className="quote-buttons">
            <div onClick={()=>random()}>
              <button >New Quote</button>
            </div>
            <Link to="/quotes"><button>Search Quote</button></Link>
          </div>
        </div>
      </>
    )
  } 
  else{
    <>
      <Navbar getQuery={getQuery}/>
      <Quotes />
    </>
  }
}

export default Home;
