import Tours from "./components/Tours"
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
            <div className="refersh">
                <h2>No Tours Left</h2>
                <button onClick={()=>setData(Data)}>Refersh</button>
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