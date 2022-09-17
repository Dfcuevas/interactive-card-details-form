import "./App.css";
import backCard from "./assets/images/bg-card-back.png";
import cardLogo from "./assets/images/card-logo.svg";

function App() {
  return (
    <div className="App-container">
      <div className="header-container">
        <div className="back-card">
          <img src={backCard} alt="back of the card" />
          <span>000</span>
        </div>
        <div className="front-card">
          <div className="svg-container">
            <img src={cardLogo} alt="" />
          </div>

          <p>0000 0000 0000 0000</p>
          <div className="nameDate">
            <span>JANE APPLEBEED</span>
            <p>
              <span>00</span>/<span>00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="formData">
        <form>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="cnumber">CARD NUMBER</label>
          <input type="number" name="number" id="cnumber" />
          <label htmlFor="date">EXP. DATE(MM/YY</label>
          <input type="text" name="dateM" placeholder="MM" id="date" />
          <input type="text" name="dateY" placeholder="YY" />
          <label htmlFor="cvc">CVC</label>
          <input type="number" id="cvc" placeholder="e.g. 123" />
          <button type="submit">Confirm</button>
        </form>
        <div className="confirmData"></div>
      </div>
    </div>
  );
}

export default App;
