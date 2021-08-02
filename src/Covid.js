import React,{useEffect,useState} from 'react'



const Covid = () => {
     const [data,setdata] = useState([]);

     const getCovidData = async()=>{
         try {
             const res=await fetch('https://api.covid19india.org/data.json');
             const actualData = await res.json();
             console.log(actualData.statewise[0]);
             setdata(actualData.statewise[0]);
             
         } catch (err) {
            console.log(err);
         }
     }

     useEffect(() => {
        getCovidData();
     }, [])


    return (

        <>
        <section>

            <h2 className="live"> 
            {/* <FontAwesomeIcon icon="fa-solid fa-circle" /> */}
            🔴 LIVE
            </h2>
            <h2 className="title"><span>COVID-19</span> CORONAVIRUS  TRACKER </h2>

         <ul>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> OUR </span><br></br> COUNTRY</p>
                         <p className="card__total card__small">INDIA</p>
                     </div>


                 </div>

             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> TOTAL </span><br></br> RECOVERED </p>
                         <p className="card__total card__small">{data.recovered}</p>
                     </div>


                 </div>

             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> TOTAL </span><br></br> CONFIRMED</p>
                         <p className="card__total card__small">{data.confirmed}</p>
                     </div>


                 </div>

             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> TOTAL </span><br></br> DEATHS</p>
                         <p className="card__total card__small">{data.deaths}</p>
                     </div>


                 </div>

             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> TOTAL </span><br></br>ACTIVE</p>
                         <p className="card__total card__small">{data.active}</p>
                     </div>


                 </div>

             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="card__inner" >
                         <p className="card__name"><span> LAST </span><br></br> UPDATED</p>
                         <p className="card__total card__small">{data.lastupdatedtime}</p>
                     </div>


                 </div>

             </li>

         </ul>
            
        </section>
        </>
    )
}

export default Covid;
