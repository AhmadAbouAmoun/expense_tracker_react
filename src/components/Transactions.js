const Transaction = ({type, note, amount, setNote, setAmount}) => {
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
                <button class={`form__btn form__btn--${type}`}>&rarr;</button>
                <label class="form__label">Note</label>
                <label class="form__label">Amount</label>
            </div>
        </div>
    );
};
export default Transaction;
