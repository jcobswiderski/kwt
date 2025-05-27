import react from "react";
import './css/home.css';


const Home = () => {
    return ( 
        <div className="home">
            <div className="home__row home__row--header">
                <h1 className="home__title">KWT</h1>
                <div className="account">
                    <div className="account__row">
                        <img className="account__logo" src="./login-avatar.png" alt="" />
                    </div>
                    <div className="account__row">
                        <span className="account__fname">Jan</span>
                        <span className="account__lname">Testowy</span>
                        <span className="account__license">FCL.(H)132932.3</span>
                    </div>
                    <div className="account__row">
                        <img className="account__logout" src="./logout.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="home__row">
                <div className="test-selector">
                    <h1 className="test-selector__title">Rozpocznij nowy test</h1>
                    <label htmlFor="a">A</label>
                    <input type="text" id="a"/>
                    <label htmlFor="b">B</label>
                    <input type="text" id="b"/>
                    <label htmlFor="c">C</label>
                    <input type="text" id="c"/>
                    <button className="test-selector__button">Rozpocznij test</button>
                </div>
                <div className="history">
                    <h1 className="history__title">Twoje wyniki</h1>
                    <div className="history_result">11. IR(H) 22.09.2025 89% ZALICZONY</div>
                    <div className="history_result">10. INSTRUKTOR 22.09.2025 67% NIEZALICZONY</div>
                    <div className="history_result">9. PILOT 22.09.2025 89% ZALICZONY</div>
                    <div className="history_result">8. INSTRUKTOR 22.09.2025 99% ZALICZONY</div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;