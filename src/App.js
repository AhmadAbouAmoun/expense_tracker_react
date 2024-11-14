import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./pages/login";
import Money from "./pages/money";

function App() {
    const location = useLocation();
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/money" element={<Money />} />
            </Routes>
        </div>
    );
}

export default App;
