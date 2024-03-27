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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
