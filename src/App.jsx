import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Content />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
