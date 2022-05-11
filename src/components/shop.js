import React, {  useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    const [items, setitems] = useState([])

    useEffect(() => {
       const  fetchItems = async ()=> {
            const res = await fetch('https://fortnite-api.theapinetwork.com/store/get')
            const data = await res.json()
            setitems(data.data)
        }
        fetchItems()
    }, []);

    return (
        <div>
            
        {items.map(item =>(
            <Link to={`/shop/${item.itemId}`} key={item.itemId}> <h1>{item.item.name}</h1> </Link>
        ))}
        
        </div>
    );
}

export default Shop;