import { useState } from "react";

const Card = ({id , name , info , image , price  , removeTour} )=>{
    
    let [ReadMore , setReadMore] = useState(false);
    const description = ReadMore?info:`${info.substring(0 , 200)}...`;
    
    function readMoreHandler(){
        setReadMore(!ReadMore);
    }
    
    return(
        <div className="card">
           <div className="tour-info">
                <img src={image} className="location-img" />
                <div className="tours-details">
                    <p className="tour-price">{price}</p>
                    <p className="tour-name">{name}</p>            
                </div>
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {ReadMore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>
           
           <button className="btn-not-interested" onClick={()=>removeTour(id)}>
               Not Interested
           </button>
           
        </div>
    );
}

export default Card;