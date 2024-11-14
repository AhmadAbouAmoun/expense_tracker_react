const Transaction = ({type, note, amount, setNote, setAmount, id}) => {
    //i used chatgpt to find out how to formulate the date this way

    return (
        <div class={`operation operation--${type}`}>
            <h2>{type}</h2>
            <div className={`form form--${type}`}>
                <input
                    type="text"
                    className={`form__input form__input--${type}-note`}
                    required
                    onChange={(e) => {
                        setNote((note = e.target.value));
                    }}
                />
                <input
                    type="number"
                    className={`form__input form__input--${type}-amount`}
                    required
                    onChange={(e) => {
                        setAmount((amount = e.target.value));
                    }}
                />
                <button
                    class={`form__btn form__btn--${type}`}
                    onClick={() => {
                        fetch("http://localhost/expense_tracker/server/createTransaction.php", {
                            method: "POST",
                            headers: {"Content-Type": "application/x-www-form-urlencoded"},
                            body: new URLSearchParams({
                                user_id: id,
                                type,
                                amount,
                                note,
                                date: 1,
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data.message);
                        });
                    }}
                >
                    &rarr;
                </button>
                <label class="form__label">Note</label>
                <label class="form__label">Amount</label>
            </div>
        </div>
    );
};
export default Transaction;
