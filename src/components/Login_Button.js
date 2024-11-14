import {useNavigate} from "react-router-dom";

const Login_Button = ({name, password, email, budget}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button
                title="Sign Up"
                type="button"
                className="sign-in_btn"
                onClick={() => {
                    fetch("http://localhost/expense_tracker/server/CreateUser.php", {
                        method: "POST",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: new URLSearchParams({
                            password: password,
                            email: email,
                        }),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        localStorage.setItem("id", data.id);
                        navigate("/money");
                    });
                }}
            >
                <span>Sign Up</span>
            </button>
            <p className="note">Terms of use &amp; Conditions</p>
        </div>
    );
};
export default Login_Button;
