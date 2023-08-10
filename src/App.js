import Tours from "./components/Tours";
import Home from "./components/Home";
import Data from "./data";
import { useState } from "react";



export default function App(){

    const [tours , setData ] = useState(Data);

    function removeTour(id){
        const newTours = tours.filter((tour) => tour.id != id );
        setData(newTours);
    }

    if(tours.length == 0){
        return(
            <div className="refresh">
                <h2 className="refresh-head">No Tours Left</h2>
                <button className="btn-white "onClick={()=>setData(Data)}>Refersh</button>
            </div>
        );
    }
    
    
    
    return(
        <div className="container">
            <Home />
            <Tours toursData = {tours} removeTour = {removeTour}/>
        </div>
        
    );
}