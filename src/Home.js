import react from "react";
import './css/home.css';
import './css/loader.css';


const Home = () => {
    return ( 
        <div className="home">
            <div className="home__row home__row--header">
                <h1 className="home__title">KWT</h1>
                {/* <div className="button__loader">
                    <div className="button__text">Posiadasz otwarty test, kliknij aby powrócić do jego rozwiązywania.</div>
                    <button className="button__text loader__button">Wznów</button>
                </div> */}
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
            <div className="home__row home__row--main">
                <div className="home__panel">
                    <h1 className="home__panel-title">Rozpocznij nowy test</h1>
                    <div className="home__panel-line">
                        <label htmlFor="a">Rodzaj testu</label>
                        <input type="text" id="a"/>
                    </div>
                    <div className="home__panel-line">
                        <label htmlFor="b">Typ testu</label>
                        <input type="text" id="b"/>
                    </div>
                    <div className="home__panel-line">
                        <label htmlFor="c">Język</label>
                        <input type="text" id="c"/>
                    </div>
                    <button className="home__panel-button">Rozpocznij test</button>
                </div>
                <div className="home__panel home__panel--second">
                    <h1 className="home__panel-title">Twoje wyniki</h1>
                    <div className="history_result">11. IR(H) 22.09.2025 89% ZALICZONY</div>
                    <div className="history_result">10. INSTRUKTOR 22.09.2025 67% NIEZALICZONY</div>
                    <div className="history_result">9. PILOT 22.09.2025 89% ZALICZONY</div>
                    <div className="history_result">8. INSTRUKTOR 22.09.2025 99% ZALICZONY</div>
                    <button className="test-selector__button">więcej</button>
                </div>
            </div>

            <div className="home__row home__row--footer">
                <div className="home__panel home__panel--footer">
                    <h1 className="home__panel-title">Aktualność testów</h1>
                    <div className="home__panel-group">
                        <div>Pilot</div>
                        <div>P3</div>
                        <div>IR</div>
                        <div>Instruktor</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Home;