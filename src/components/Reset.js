const Reset = ({id, flag, setFlag}) => {
    return (
        <div class="operation operation--close">
            <h2>Reset Account</h2>
            <button
                class="close-btn"
                onClick={() => {
                    fetch("http://localhost/expense_tracker/server/deleteTransactions.php", {
                        method: "POST",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: new URLSearchParams({
                            user_id: id,
                        }),
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data.status))
                    .catch((e) => console.error(e));
                    setFlag(!flag);
                    console.log(flag);
                }}
            >
                Reset All actions
            </button>
        </div>
    );
};
export default Reset;
