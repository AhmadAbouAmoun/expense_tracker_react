const MovmentsContainer = () => {
    return (
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
    );
};
export default MovmentsContainer;
