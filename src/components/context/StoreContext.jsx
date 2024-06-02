import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [recipes, setRecipes] = useState([]);
    const url = "http://localhost:5000" 
    const [token, setToken] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get('http://localhost:5000/api/recipe/get');
            console.log(resp.data);
            setRecipes(resp.data);
        };

        fetchData();
    }, []);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))

        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post("http://localhost:5000/api/cart/add", { itemId }, { headers: { token } })
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post("http://localhost:5000/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = recipes.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]

            }
        }
        return totalAmount
    }

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    }, [])

    const loadCartData = async (token) => {
        const response = await axios.post("http://localhost:5000/api/cart/get", {}, { headers: { token } })
        setCartItems(response.data.cartData)
    }

    const contextValue = {
        recipes,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        url

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
