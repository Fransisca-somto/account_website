import React from "react";
import logo from "./Assets/TMicon.ico";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";
import image3 from "./Assets/image3.jpg";
import image4 from "./Assets/image4.jpg";
import image5 from "./Assets/image5.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const background = () => {
    const images = [
      {img: image1,},
      {img: image2,},
      {img: image3,},
      {img: image4,},
      {img: image5,}
    ];

    const rand = Math.floor(Math.random() * images.length);
    const image = images[rand];
    return image.img;
  };

  // const [inputUsername, setInputUsername] = useState('');
  // const [inputPassword, setInputPassword] = useState('');

  // const data = [
  //   {
  //     username: 'Fransisca',
  //     password: 'somtochukwu'
  //   }
  // ]

  // const handleChange = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   setInputUsername(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   setInputPassword(event.target.value);
  // }
  
  // const handleSubmit = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   if (inputUsername !== data.username & inputPassword !== data.password) {
  //     return alert('Username and password is not in the system')
  //   } else{
  //     return alert('Username and password are in the system')
  //   }
  // };
  return (
    <div
      style={{
        backgroundImage: `url(${background()})`
      }} className="index"
    >
      <ul className="index__list">
        <li>Point Of Sales (POS)</li>
        <li>Multi-Location POS</li>
        <li>Dynamic Offline/Online Sync</li>
        <li>Stock Management</li>
        <li>Customers' Ledger</li>
        <li>Cash Flow/Bank Transactions</li>
        <li>Expenditures</li>
        <li>Secured Access Level</li>
        <li>Access from Any Device</li>
        <li>And More...</li>
      </ul>

      <form className="index__form" >
        <div>
            <img src={logo} className="index__logo" />
            <p>Log In</p>
            <hr />
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="pAssWorD" required />
            <p>
            Forgot your password? <a href="">Click Here</a>.
            </p>
        </div>
        <Link to="/home" className="input__button">Login</Link>
      </form>
    </div>
  );
};

export default App;
