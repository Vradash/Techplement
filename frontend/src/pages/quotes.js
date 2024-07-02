import { useEffect, useState } from "react";
import axios from "axios";

import suggestions from "../components/suggestions";
import QuoteCard from "../components/quoteCard" 
import { Link } from "react-router-dom";

const Quotes = () => {

    const [input, setInput] = useState('');
    const [clicked,setClicked] = useState(true);
    const [data,setData] = useState(null);
    
    useEffect(()=>{
        axios.get("https://type.fit/api/quotes")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[]) 

  return (
    
    <>  
        <div className="navbar">
            <div className="com-icon"><Link to="/"><h3>QuoteGen</h3></Link></div>
            <div className="wrapper">
                <div className="search-box ">
                    <input className="search-txt" type="text" placeholder="Enter author name" onChange={e=>{setInput(e.target.value);setClicked(true)}} value={input}/>
                    <a className="icon" onClick={()=>setClicked(!clicked)}>
                        <i className="fas fa-search" ></i>
                    </a>
                    <div className={(clicked)? "sugg-box": "sugg-box invisible"}>
                        {   
                            suggestions.filter((val)=>{
                            if(input === ""){
                                return 
                            }else if(val.toLowerCase().startsWith(input.toLowerCase())){
                                return val;
                            }
                        }).sort().map((val, key)=>{
                            return <li key={key} onClick={()=>{setInput(val);setClicked(false)}}>{val}</li>;
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        {(data)?(data.filter((val)=>{
            if(input === ""){
                return val;
            }else if(val.author.toLowerCase().startsWith(input.toLowerCase())){
                return val;
            }
        }).map((quote,index)=><QuoteCard key={index} data={quote}/>))
        :<QuoteCard data={{text:"Loading..."}}/>}
    </>
  )
}

export default Quotes;
