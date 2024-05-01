import MenuItem from "../Components/Menu/MenuItem";
import RedBtn from "../Components/UI/RedBtn";
import burgerImg from "../Assets/images/cat-burger.jpg";
import { componentDidMount, useState, useEffect, useCallback } from 'react';
import axios from "axios";

import React from "react";
import Card from '../Components/UI/Card/Card';



const BurgerPage = () => {


    const [burgers, setBurgers] = useState([]);

    const fetchBurgers = useCallback ( async () => {

        try {
            const response = await axios.request('https://my-burger-api.herokuapp.com/burgers');
            setBurgers(response.data);
            }
        catch (error) { console.log("ERROR"); }


        const pricedarray=[...burgers];
        for(const item of pricedarray) {
            item.price = Math.floor(Math.random() * 1000) + 100;
       }
        setBurgers(pricedarray);
        console.log(burgers);
    }
    );

    useEffect(() => {
        fetchBurgers();
    }, []);



    const displayItems = burgers.map( (item) => 
        
        // for(const key in burgers)
            <Card name={item.name} img={burgerImg} des={item.description} price={item.price}></Card>
        );      
    

    return (
        <div className="burger-pg">
            <div className="container">
                <h1>Treat your taste buds with these scrumptious Burgers</h1>
                <div className="card-grid">
                {displayItems}
                </div>
            </div>
        </div>
    );
}


export default BurgerPage;