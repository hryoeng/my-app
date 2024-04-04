import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chapter03/Library";
import Hello from "./chapter03/Hello";
import FormatName from "./chapter03/FormatName";
import ConfirmDialog from './chapter04/ConfirmDialog';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import Comment from './chapter05_ex/Comment';
import First from './chapter05_ex2/First';
import Second from './chapter05_ex2/Second';
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Counter';
import Counter2 from './chapter07/Counter2';
import Accommodate from './chapter07_ex/Accommodate';
import Recommend1 from './chapter07_ex/Recommend1';
import Recommend2 from './chapter07_ex/Recommend2';
import Gugufunction from './chapter07_ex/Gugufunction';
import Gugudan from './chapter07_ex/Gugudan';
import WordRelay from './chapter07_ex/WordRelay';
import GugudanApp from './chapter07_ex/GugudanApp';
import ConfirmButton from './chapter08/ConfirmButton';
import MailBox from './chapter09/MailBox';
import Counter3 from './chapter09/MailBox';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LandingPage from './chapter09_ex/LandingPage';
import LoginPage from './chapter09_ex/LoginPage';
import LoginPage2 from './chapter09_ex/LoginPage2';
import NumberList from './chapter10/NumberList';
import AttendanceBook from './chapter10_ex/AttendanceBook';
import FruitSelect from './chapter11/FruitSelect';
import Reservation from './chapter11/Reservation';
import SignUp from './chapter11_ex/SignUp';
import NewPet from './chapter11_ex/Pet';
import DarkOrLight from './chapter14/DarkOrLight';
import SignUp2 from './chapter14_ex/SignUp';
import LoginPage3 from './chapter14_ex/LoginPage3';
import StyledPage from './chapter15/StyledPage';
import Dark from './chapter15/Dark';
import Blocks from './chapter15_ex/Blocks';
import WeatherApp from './axios/WeatherApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

// const numbers = [1,2,3,4,5];

// root.render(
//   <React.StrictMode>
//     <NumberList numbers={numbers}/>
//   </React.StrictMode>
// );

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

/* MailBox */
// const unreadMessages = ["1", "2", "3"];

// root.render(
//   <React.StrictMode>
//     <MailBox unreadMessages={unreadMessages} />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
