import React from 'react';
import classes from './IndexPage.css';
import RedBtn from '../../Components/UI/RedBtn';
import MenuItem from '../../Components/Menu/MenuItem';
import Slider from '../../Components/UI/Slider';
import { useState,componentDidMount,useEffect } from 'react';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { Link, useNavigate } from "react-router-dom";

import Card from "../../Components/UI/Card/Card";



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



    return (
        <div className="IndexPage">
            <div className='container'>
                <Slider/>
                <div className="category">
                    <h1>Browse Categories</h1>
                    <div className="catItems">
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
                <div className="dealSec">
                <h1>Crazy Deals</h1>
                <div className="card-grid">
                <Card name="Deal1" img={deal1}></Card>
                <Card name="Deal2" img={deal2}></Card>
                <Card name="Deal3" img={deal3}></Card>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;

