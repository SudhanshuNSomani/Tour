import Navbar  from "./Navbar";
import Heading from "./Heading";

export default function Home(){
        return(
            <div className="home-page" id="home">
                <Navbar />
                <Heading />
            </div>
        );
}