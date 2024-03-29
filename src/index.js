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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoginPage2 />
  </React.StrictMode>
);

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
