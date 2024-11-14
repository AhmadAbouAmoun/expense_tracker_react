const Transaction = ({type}) => {
    return (
        <div class={`operation operation--${type}`}>
            <h2>{type}</h2>
            <div className={`form form--${type}`}>
                <input type="text" className={`form__input form__input--${type}-note`} required />
                <input type="number" className={`form__input form__input--${type}-amount`} required />
                <button class={`form__btn form__btn--${type}`}>&rarr;</button>
                <label class="form__label">Note</label>
                <label class="form__label">Amount</label>
            </div>
        </div>
    );
};
export default Transaction;
