import {Routes, Route, useLocation} from "react-router-dom";
import SignUp from "./pages/signup";
import Money from "./pages/money";
import Login from "./pages/login";

function App() {
    const location = useLocation();
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/money" element={<Money />} />
            </Routes>
        </div>
    );
}

export default App;
