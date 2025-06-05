import RestroCard from './RestroCard';
import { IMG_URL } from '../utils/consts';
import { useState,useEffect,useRef } from 'react';
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from 'react-router-dom';




const Body = ()=>{

    let [listOfRes,setListOfRes] = useState([]);
    let[filteredRes,setFilteredRes] = useState([]);
    let [listOfImg,setListOfImg] =useState([]);
    let [searchText,setSearchText] = useState("");
    let scrollRef = useRef(null);
    
    useEffect(()=>{
        fetchData();
        fetchImages();
    },[]);

    const fetchImages = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfImg(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
       //console.log(listOfImg);
    }
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const offset = json?.data?.pageOffset?.nextOffset;
        //console.log(json);
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
   
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      };
    
      const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      };

      if(listOfRes===0){
        return
        <ShimmerUi/>
      }
    
    return(
        <div className="body">
            <div className='food-container'>
                <div className='food-container-header'>
                <h1>What's On Your Mind?</h1>
                <div className='front-back-btn'>
               <button onClick={scrollLeft}> <SlArrowLeftCircle /></button>
               <button onClick={scrollRight}><SlArrowRightCircle /></button> 
                </div>
                </div>
                
                <div className='scroll-container' ref={scrollRef}>
                    {listOfImg.map((img)=>{
                        return(
                            <img className='food-logo' src={IMG_URL+img?.imageId} alt="food-logo"></img>
                        )
                    })}
                </div>    
    
            
            </div>
            
            <div className="filter">
            <div className="search">
                <input type="text"value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    console.log(searchText);
                }}></input>
                <button className= "searchBtn" onClick={()=>{
                    let filteredData = listOfRes.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));                    
                    setFilteredRes(filteredData);
                }}>search</button>
            </div>
                <button onClick={()=>{
                    let filteredData = listOfRes.filter(
                        (res)=>res.info.avgRating>4.2);                    
                        setFilteredRes(filteredData);
                }}>TopRatedRestaurents</button>
            </div>
            <div className="res-container">
                {filteredRes.map((restro) =>
                (<Link className="link" key={restro.info.id} to={`/restuarant/${restro.info.id}`}> <RestroCard restroData={restro.info}/></Link>))
                }
        
                </div>
        </div>
    )
}
export default Body;