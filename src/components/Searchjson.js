import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../App.css"

function Searchjson() {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    useEffect(() => {
        axios('/searchjson')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
               // setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);
    
    // const styles = {
    //     display:'inline',
    //     width:'20%',
    //     height:80,
    //     float:'left',
    //     padding:5,
    //     border:'0.5px solid black',
    //     marginBottom:10,
    //     marginRight:10
    //     }
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter
        result = allData.filter((data) => {
       return data.title.search(value) !== -1;
        });
        setFilteredData(result);
    }
    return (
        <div className="App">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label >Search:</label>
        <input className="form-control" type="text" onChange={(event) =>handleSearch(event)} />
        </div>

        {/* <input className="form-control" type="text"  />
        </div>
        <button className="btn btn-danger" onClick={(event) =>handleSearch(event)}>
            Search
        </button> */}
        <div style={{padding:10}}>
        {filteredData.map((value,index)=>{
        return(
        <div className="card" key={value.id}>
            
         <div className="card-img-top">
            <img src={value.thumbnailUrl}alt="" />
       
        <div className="card-body">
        {value.title}
        </div>
        </div>
        </div>
        )
        })}
        </div>
        </div>
    )
}

export default Searchjson
