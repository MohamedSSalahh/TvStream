import { useEffect } from "react";
import { scrollToTop } from "../../utilities/scrollToTop";
import { Banner, Genre } from "../../components";



const HomeScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div className="pg-home">
     <Banner/>
   <Genre/>
    </div>
  );
};

export default HomeScreen;
