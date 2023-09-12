import Header from './Header';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from "./FilteredDishes";
import {AllMenus} from "./AllMenuContext"; //if it is named export then use  {}
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import { AppProvider } from '../context/AppProvider';


function Menu(){
   
return(
    <div>
        <Router>
            <AppProvider>
                <Header/>  
                <Hero/>
                <Switch>
                    <Route exact path="/" >
                        <AllMenus>
                        <SpecialDishes/>
                        <FilteredDishes /> 
                        </AllMenus>
                    </Route>
                    <Route path="/checkout" element={< Checkout />}>
                    <Checkout/>
                    </Route>
                </Switch>
            </AppProvider>
        </Router>
        
    </div>
    
    
)
}
export default Menu;