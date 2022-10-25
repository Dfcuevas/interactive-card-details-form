import { useState } from "react";
import "./App.css";
import backCard from "./assets/images/bg-card-back.png";
import cardLogo from "./assets/images/card-logo.svg";

function App() {
  const [showDiv, setShowDiv] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: "",
    number: "",
    dateY: "",
    dateM: "",
    cvc: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setShowDiv(!showDiv);
    setDataForm({
      name: "",
      number: "",
      dateY: "",
      dateM: "",
      cvc: "",
    });
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setDataForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="App-container">
      <div className="header-container">
        <div className="back-card">
          <img src={backCard} alt="back of the card" />
          <span>{!dataForm.cvc ? "000" : dataForm.cvc}</span>
        </div>
        <div className="front-card">
          <div className="svg-container">
            <img src={cardLogo} alt="" />
          </div>

          <p>
            {!dataForm.number
              ? "0000 0000 0000 0000"
              : `${dataForm.number.substring(0, 4)} ${dataForm.number.substring(
                  4,
                  8
                )} ${dataForm.number.substring(
                  8,
                  12
                )} ${dataForm.number.substring(12, 16)}`}
          </p>
          <div className="nameDate">
            <span>
              {!dataForm.name
                ? "Jane Appleseed".toUpperCase()
                : dataForm.name.toUpperCase()}
            </span>
            <p>
              <span>{!dataForm.dateM ? "00" : dataForm.dateM}</span>/
              <span>{!dataForm.dateY ? "00" : dataForm.dateY}</span>
            </p>
          </div>
        </div>
      </div>

      <form
        className="formData"
        style={showDiv ? { display: "none" } : { display: "flex" }}
      >
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          onChange={handleFormChange}
          value={dataForm.name}
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Jane Appleseed"
        />
        <label htmlFor="cnumber">CARD NUMBER</label>
        <input
          onChange={handleFormChange}
          value={dataForm.number}
          type="number"
          name="number"
          id="cnumber"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="form-date-cvc">
          <div className="form-date">
            <label htmlFor="date">EXP. DATE (MM/YY)</label>
            <div className="form-date-input">
              <input
                type="text"
                name="dateM"
                placeholder="MM"
                id="date"
                onChange={handleFormChange}
                value={dataForm.dateM}
              />
              <input
                type="text"
                name="dateY"
                id="date"
                placeholder="YY"
                onChange={handleFormChange}
                value={dataForm.dateY}
              />
            </div>
          </div>
          <div className="form-cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              placeholder="e.g. 123"
              name="cvc"
              onChange={handleFormChange}
              value={dataForm.cvc}
            />
          </div>
        </div>
        <button className="btn-submit" type="submit" onClick={handleChange}>
          Confirm
        </button>
      </form>
      <div
        className="confirmData"
        style={!showDiv ? { display: "none" } : { display: "flex" }}
      >
        <div>
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="url(#a)" />
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
            <defs>
              <linearGradient
                id="a"
                x1="-23.014"
                y1="11.507"
                x2="0"
                y2="91.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6348FE" />
                <stop offset="1" stop-color="#610595" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button className="btn-submit" type="submit" onClick={handleChange}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
