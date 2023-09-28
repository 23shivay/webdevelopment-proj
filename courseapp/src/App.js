import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Cards from './components/Cards.jsx';
import Filter from './components/Filter.jsx';
import { filterData,apiUrl } from './data.js';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import Spinner from './components/Spinner';


function App() {
  const[courses,setCourses]=useState([]);
  const [laoding, setLoading] = useState(true);
  const[category,setCategory]=useState(filterData[0].title);
  
  useEffect(()=>{
    const fetchData= async()=>{
      
      setLoading(true);
      
      try{
        const res = await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error(" Network me issue hai")

      }
      setLoading(false);
      
    }
    fetchData();
  },[]);
  



  return (
    <div  className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">>
      {
        laoding?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
      </div>

      
    </div>
  );
}

export default App;
