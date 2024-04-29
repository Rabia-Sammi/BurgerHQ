import MenuItem from "../Components/Menu/MenuItem";
import RedBtn from "../Components/UI/RedBtn";
import burgerImg from "../Assets/images/cat-burger.jpg";
import { componentDidMount, useState, useEffect, useCallback } from 'react';
import axios from "axios";

import React from "react";
import Card from '../Components/UI/Card/Card';



const BurgerPage = () => {


    const [burgers, setBurgers] = useState([]);

    const fetchBurgers = useCallback(async () => {

        try {
            const response = await axios.request('https://my-burger-api.herokuapp.com/burgers');
            setBurgers(response.data);
            console.log(burgers);


        }
        catch (error) { console.log(error); }
    }, []);




    //     async () => {



    //     try {
    //         const response = await fetch('https://sapapi.scrubskp.com/api/Solution')
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //         // console.log(response);
    //         const data = await response.json();

    //         const loadedSolutions = [];
    //         for (const key in data) {
    //             let cats = data[key].categories.map(c => {
    //                 return c.name
    //             });
    //             loadedSolutions.push({
    //                 id: data[key].id,
    //                 icon: data[key].iconUrl,
    //                 name: data[key].name,
    //                 description: data[key].description,
    //                 category: cats[0]
    //             });
    //         }

    //         setfetchedSolutions(loadedSolutions);
    //     }
    //     catch (error) {
    //         console.log("ERROR");
    //         // setError(error.message);
    //     }
    //     // setIsLoading(false);
    // }, []);
    useEffect(() => {
        fetchBurgers();
    }, [fetchBurgers]);







    // useEffect(() => {
    //     (async () => {
    //     try {
    //         const response = await axios.request('https://my-burger-api.herokuapp.com/burgers');
    //         setBurgers(response);
    //     } catch (error) {
    //         console.error(error);
    //     }})()
    //      }, [])









    // const itemList = ITEMS.map((item) =>

    //     <div className="card">
    //         <img src={img} alt="" />
    //         <div className="cardBody">
    //             <h2>{item.name}</h2>

    //         </div>
    //         <div className="cardFooter">
    //             <h2>{item.price}</h2>
    //             <RedBtn>Add to Bucket</RedBtn>
    //         </div>
    //     </div>

    // ); 

    // console.log("ccccccccccc" + burgers[1].name);

    const displayItems = burgers.map( (item) => 
        
        // for(const key in burgers)
            <Card name={item.name} img={burgerImg} des={item.description}></Card>
        );      
    

    console.log(burgers);
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