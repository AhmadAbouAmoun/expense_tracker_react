import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/header.css";
import "../styles/styleResponsivness.css";
import Navbar from "../components/Navbar";
import Balance from "../components/Balance";
import MovmentsContainer from "../components/MovmentsContainer";
import Transaction from "../components/Transactions";

const Money = () => {
    const [name, setName] = useState("");
    const [budget, setBudget] = useState("");
    const id = localStorage.getItem("id");
    fetch("http://localhost/expense_tracker/server/getUser.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            id,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        setName(data.name);
        setBudget(data.budget);
    });
    return (
        <div>
            <Navbar name={name} />
            <main class="app">
                <Balance budget={budget} />
                <MovmentsContainer />

                <Transaction type="income" />
                <Transaction type="expenses" />

                <div class="operation operation--close">
                    <h2>Reset Account</h2>
                    <button class="close-btn" onclick="clearMovements()">
                        Reset All actions
                    </button>
                </div>
            </main>
            <div class="card" id="inputCard">
                <h2>
                    Enter Values <span class="card__title"></span>
                </h2>
                <input type="text" id="input1" placeholder="Note" required />
                <input type="text" id="input2" placeholder="Amount" required />
                <button class="submit" onclick="SubmitCard()">
                    Submit
                </button>
                <button class="close" onclick="toggleCard()">
                    Close
                </button>
            </div>
        </div>
    );
};
export default Money;
