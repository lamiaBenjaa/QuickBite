import React, { useContext, useEffect, useState } from 'react'
import './FoodDisplay.css'
import axios from 'axios';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';

export const FoodDisplay = ({categorie}) => {
    const [recipes, setRecipes] = useState([]);
   
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

    useEffect(() => {
        const fetchData = async () => {
                const resp = await axios.get('http://localhost:5000/api/recipe/get');
                console.log(resp.data);
                setRecipes(resp.data);
        };

        fetchData();
    }, []);

    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {recipes.map((item, index) => {
                    if(categorie==="All" || categorie===item.categorie){
                        return( <div  key={index} className='food-display-list-item'>
                        <div className="food-item-img-container">
                            <img className='food-item-image' src={`http://localhost:5000/getimage/${item.image}`} alt="image" />
                             {
                                !cartItems[item._id]
                                ?<div>
                                    <img className='add' onClick={()=>addToCart(item._id)} src={assets.add_icon_white}/>
                                </div>
                                :<div className='food-item-counter'>
                                    <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red}  />
                                    <span>{cartItems[item._id]}</span>
                                    <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} />
                                </div>
                             }
                        </div>
                        <div className="food-item-info">
                            <p >{item.title}</p>
                            <p className='food-item-desc'>{item.description}</p>
                            <p className='food-item-price'>{item.price}$</p>
                        </div>
                    </div>    
                )
                    }
                   })}
            </div>
            <hr />
        </div>
    );
}
