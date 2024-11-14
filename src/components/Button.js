import {useNavigate} from "react-router-dom";

const Button = ({name, password, email, budget}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button
                title="Sign In"
                type="button"
                className="sign-in_btn"
                onClick={() => {
                    fetch("http://localhost/expense_tracker/server/CreateUser.php", {
                        method: "POST",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: new URLSearchParams({
                            name: name,
                            password: password,
                            budget: budget,
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
                <span>Sign In</span>
            </button>
            <p className="note">Terms of use &amp; Conditions</p>
        </div>
    );
};
export default Button;
