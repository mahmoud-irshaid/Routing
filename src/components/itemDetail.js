import React, {  useEffect , useState } from 'react';
function ItemDetail({match}) {
    
    const [item, setitem] = useState({ images :{}})

    useEffect(() => {
       const fetchItem =async () => {
            const res = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
            const data = await res.json()
            setitem(data.data.item);
            console.log(data.data.item)
        }
        fetchItem();
    }, []);

    
    
    return(
        <div>
         <h1>{item.name}</h1>
         <img src={item.images.icon}/>
        </div>
    )
}
export default ItemDetail;