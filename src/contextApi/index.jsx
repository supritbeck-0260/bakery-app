import { createContext } from "react";


const BakeryItemsContext = createContext({
    quantity:{},
    increaseHandler: ()=>{},
     decreaseHandler: ()=>{}
});

export default BakeryItemsContext