import Cards from "./Cards"
const Tours  = ({toursData , removeTour}) =>{
    
    return (
        <div className="card-container">
        
            {   
                toursData.map((tour)=>{
                    return <Cards {...tour} removeTour = {removeTour}/>;
                })
               
            }
        </div>
    );
}

export default Tours;


