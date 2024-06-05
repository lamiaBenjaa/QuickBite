import React, { useEffect, useState } from 'react'
import './ExploreMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function ExploreMenu({categorie ,setCategorie}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const resp = await axios.get('http://localhost:5000/categorie/get');
                console.log(resp.data);
                setCategories(resp.data);
        };

        fetchData();
    }, []);

    return (
        <div className='explore-menu'>
            <div className='row p-5'>
            <h1 className='col-4'>Explore our Menu</h1>
            <p className='explore-menu-text col-8'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>
            <div className="explore-menu-list">
                {categories.map((item, index) => (
                    <>
                    <div onClick={()=>setCategorie(prev=>prev===item.title?"All":item.title)} key={index} className='explore-menu-list-item'>
                         <p className='text-ellipsis'>{item.title}</p>
                        <div className='image'>
                           <img className={categorie===item.title?"active":""} src={`http://localhost:5000/getimage/${item.image}`} alt="image" />
                        </div>
                        
                    </div>
                    
                    </>
                ))}
            </div>
            <hr />
        </div>
    );
}


export default ExploreMenu