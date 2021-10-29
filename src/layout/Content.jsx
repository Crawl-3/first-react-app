import { Switch, Route } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import NotFound from "../views/not-found/NotFound";

function Content() {
    return (
        <div>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route path="**" component={NotFound} />
            </Switch>
        </div>
    );
}

export default Content;
