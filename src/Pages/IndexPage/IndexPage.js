import React from 'react';
import classes from './IndexPage.module.css';
import RedBtn from '../../Components/UI/RedBtn';
import MenuItem from '../../Components/Menu/MenuItem';
import Slider from '../../Components/UI/Slider';
import { useState,componentDidMount,useEffect } from 'react';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { Link, useNavigate } from "react-router-dom";





import burger from './images/cat-burger.jpg';
import pizza from './images/cat-pizza.jpg';
import desi from './images/cat-desi.jpg';
import side from './images/cat-side.jpg';
import drinks from './images/cat-drinks.jpg';

import deal1 from './images/deal1.png';
import deal2 from './images/deal2.png';
import deal3 from './images/deal3.png';

import BurgerPage from '../BurgerPage';



const IndexPage = () => {

    // const axios = require('axios');

    // const navigate = useNavigate();



    useEffect(() => {
        (async () => {
        try {
            const response = await axios.request('https://my-burger-api.herokuapp.com/burgers');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    // console.log("++++++++++++++++++++++++++++++++++++++++++++++")    

    //         await axios.get('https://api.quotable.io/random')
    //                   .then(res => {
    //                     const burgers = res.data;
    //                     console.log(burgers);
    //                   })
        
    //                   .catch(error => {
    //                     console.log(error);
    //                   })

                    })
                    ()


                }, [])

    return (
        <div className={classes.IndexPage}>
            <div className='container'>
                <Slider/>
                <div className={classes.category}>
                    <h1>Browse Categories</h1>
                    <div className={classes.catItems}>
                    <Link to='/burgers'>
                        <div>
                            <img src={burger} />
                            <h3>Burgers</h3>
                        </div>
                        </Link>
                        <div>
                            <img src={pizza} />
                            <a href="#"><h3>Pizza</h3></a>
                        </div>
                        <div>
                            <img src={desi} />
                            <a href="#"><h3>Desi</h3></a>
                        </div>
                        <div>
                            <img src={side} />
                            <a href="#"><h3>Side Orders</h3></a>
                        </div>
                        <div>
                            <img src={drinks} />
                            <a href="#"><h3>Drinks</h3></a>
                        </div>
                    </div>
                </div>
                <div className={classes.dealSec}>
                <h1>Crazy Deals</h1>
                <div className="card-grid">
                    <div className={classes.card}>
                        <img src={deal1} alt=""/>
                        <div className={classes.cardBody}>
                            <h2>Deal 1</h2>
                            <p>lorem jhskjfhskfh</p>
                        </div>
                        <div className={classes.cardFooter}>
                            <h2>RS 250</h2>
                            <RedBtn>Add to Bucket</RedBtn>                            
                        </div>
                    </div>
                    
                    <div className={classes.card}>
                        <img src={deal2} alt=""/>
                        <div className={classes.cardBody}>
                            <h2>Deal 2</h2>
                            <p>lorem jhskjfhskfh nsfskfjshfj  dfsdfsdfsdf sfsdfdsfsdf sdfsfdsff</p>
                        </div>
                        <div className={classes.cardFooter}>
                            <h2>RS 650</h2>
                            <RedBtn>Add to Bucket</RedBtn>                            
                        </div>
                    </div>
                    
                    <div className={classes.card}>
                        <img src={deal3} alt=""/>
                        <div className={classes.cardBody}>
                            <h2>Deal 3</h2>
                            <p>lorem jhskjfhskfh</p>
                        </div>
                        <div className={classes.cardFooter}>
                            <h2>RS 499</h2>
                            <RedBtn>Add to Bucket</RedBtn>                            
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;

