import axios from "axios";
import { createContext, useEffect, useState } from "react";
const ProductContext = createContext();
export const ProductProvide = ({children}) =>{
    const [items,setItems] = useState([]);

        const [isLoading,setisLoading] = useState(false)
    
        useEffect(()=>{
    
        const fetchApi = async () =>{
            // get, post, put/patch, delete
            // crud
                try{
                    setisLoading(true)
                    const res = await axios.get('https://data-server-json.onrender.com/products');
                    console.table(res.data);
                    setItems(res.data)
                }catch(e){
                    console.log(e.message);
                    
                }finally{
                    setisLoading(false)
                }
    
        }
    
        fetchApi();
        },[]) 

    return(
        <ProductContext.Provider value={{items,isLoading}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext;
