import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Ozzy from "./views/Ozzy";
import Tony from "./views/Tony";
import Geezer from "./views/Geezer";
import Bill from "./views/Bill";
import NotFound from "./views/NotFound";
import Albums from "./views/Albums";
import CurrentAlbum from "./views/CurrentAlbum";
import "./App.css";

// ? Update 3: Started using dynamic routing...
// Dynamic routing takes place while your app is rendering
// It means, for example, that we can fetch() data from a server and then use it in our routes.
// E.g. If there are 10 products in the DB, with ids 1-10...
// The path "/products/1" will render a page with the details of the product with id "1". Same with "/products/2" etc.

// Dynamic routing means that if the DB gets a new product, with id "11"...
// The app will fetch the new data when it first renders...
// ... and *automatically* handle the new path "/products/11".
// * So we are no longer restricted to only routes that we know about in advance!

// ? Let's see how to do this...

// * 1. Create an "Albums" view to list some of Black Sabbath's albums
// * 2. In the "Albums" view, we can click any of the albums and be taken to a view about that specific album!

const App = () => {
    return (
        <div>
            <Router>
                <header>
                    <Navigation />
                </header>
                
                {/* 
                When the user navigates to a path, e.g. "localhost:3000/" or "localhost:3000/vocals" 
                The Router will handle all the different paths the user may need to take
                We will set up a Route to handle each path the user can take
                */}
                <main>
                    <Switch>
                        {/* Route 1: "Home" page */}
                        {/* // ? Update 1: Refactor Routes to use a self-closing syntax */}
                        {/* <Route path="/" exact>
                            <Home />
                        </Route> */}
                        <Route path="/" exact component={Home} />

                        <Route path="/vocals" component={Ozzy} />

                        <Route path="/guitar" component={Tony} />

                        <Route path="/bass" component={Geezer} />

                        <Route path="/drums" component={Bill} />

                        {/* // ? Update 3B: Dynamic routing components */}
                        {/* Route 6: Make a route to a view which renders a list of albums */}
                        <Route path="/albums" exact component={Albums} />

                        {/* Route 7: Make a route to show the details of a specific album */}
                        <Route path="/albums/new-album" component={CurrentAlbum} />
                        
                        {/* // ? Update 2: Change Redirect to a Not Found Component using a wildcard (*) path */}
                        {/* <Redirect to="/" /> */}

                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>

            </Router>
        </div>
    )
}

export default App;