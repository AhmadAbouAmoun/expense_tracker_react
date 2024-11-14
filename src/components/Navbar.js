const Nav = ({name}) => {
    return (
        <div>
            <nav>
                <p class="welcome">Welcome,{name}</p>
                <img src="./assests/logo.png" alt="Logo" class="logo" />
            </nav>
        </div>
    );
};
export default Nav;
