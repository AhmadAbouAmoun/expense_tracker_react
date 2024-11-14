import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/style.css";
import "../styles/card.css";
import "../styles/header.css";
import "../styles/styleResponsivness.css";
import Navbar from "../components/Navbar";

const Money = () => {
    return (
        <div>
            <Navbar />
            <main class="app">
                <div class="balance">
                    <div>
                        <p class="balance__label">Main Budget:</p>
                    </div>
                    <p class="balance__value" id="balance__value"></p>
                </div>
                <div class="movements">
                    <select id="sort-options" onchange="sort()">
                        <option value="by-date">By date</option>
                        <option value="by-income">Income</option>
                        <option value="by-expenses">Expense</option>
                        <option value="by-notes">Note</option>
                        <option value="by-max">Maximum</option>
                        <option value="by-min">Minimum</option>
                    </select>
                    <div id="containerMovements"></div>
                </div>
                <div class="operation operation--income">
                    <h2>income</h2>
                    <div class="form form--income">
                        <input type="text" id="income-note" class="form__input form__input--income-note" required />
                        <input
                            type="number"
                            id="income-amount"
                            class="form__input form__input--income-amount"
                            required
                        />
                        <button class="form__btn form__btn--income" onclick="incomeSubmit()">
                            &rarr;
                        </button>
                        <label class="form__label">Note</label>
                        <label class="form__label">Amount</label>
                    </div>
                </div>
                <div class="operation operation--expenses">
                    <h2>expenses</h2>
                    <div class="form form--expenses">
                        <input type="text" id="expenses-note" class="form__input form__input--expenses-note" required />
                        <input
                            type="number"
                            id="expenses-amount"
                            class="form__input form__input--expenses-amount"
                            required
                        />
                        <button class="form__btn form__btn--expenses" onclick="expensesSubmit()">
                            &rarr;
                        </button>
                        <label class="form__label">Note</label>
                        <label class="form__label">Amount</label>
                    </div>
                </div>

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
