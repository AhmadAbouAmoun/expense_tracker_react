const Balance = ({budget}) => {
    return (
        <>
            <div class="balance">
                <div>
                    <p class="balance__label">Main Budget:{budget}</p>
                </div>
                <p class="balance__value">Current Balance:</p>
            </div>
        </>
    );
};
export default Balance;
