import Cards from "./Cards"
const Tours  = ({toursData , removeTour}) =>{
    
    return (
        <div>
            <h1>Let' Goooo</h1>
            {   
                toursData.map((tour)=>{
                    return <Cards {...tour} removeTour = {removeTour}/>;
                })
               
            }
        </div>
    );
}

export default Tours;


