import React from "react"
import Card from "./Card"
import { useEffect, useState } from "react";
import Axios from "axios";
const Services=()=>{
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
            // &limit=10
        (response) => {
            setListOfCoins(response.data.coins);
        }
    );
    }, []);

    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return(<>
            <div className='my-5'>
                <h1 className='text-center text-light'>OUR SERVICES</h1>
            </div> 
            <div className="container my-5 w-50" >
                <div className="input-group rounded border border-primary">
                    <input 
                    className="form-control rounded text-center"
                    type="text"
                    placeholder ="Bitcoin..."
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }} 
                    aria-label="Search" 
                    aria-describedby="search-addon" />
                </div>
            </div>
           <div className='container-fluid mb-5'>
            <div className='row '>
                <div className='col-10 mx-auto'>
                    <div className='row gy-4'>
                        {
                            filteredCoins.map((coins)=>{
                                return <Card 
                                    // key={idx}
                                    img={coins.icon}
                                    title={coins.name}
                                    price={coins.price}
                                    symbol={coins.symbol}
                                    website={coins.websiteUrl}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
           </div>
    </>)
}

export default Services