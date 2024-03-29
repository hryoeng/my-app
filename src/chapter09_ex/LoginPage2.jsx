// import React, { useState, useRef, useVaild } from "react";
// import Login from "./Login";

// const styles = {
//     wrapper: {
//         padding: 16,
//         display: "flex",
//         flexDirection: "row",
//         borderBottom: "1px solid grey",
//     },
//     greeting: {
//         marginRight: 8,
//     }
// };

// const USER_ID = "user";
// const USER_PW = "1234";

// function LoginPage2() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const [form, setForm] = useState({
//         id: '',
//         password:'',
//     });
//     const [inputPw, setInputPW] = useRef

//     const inputEl = useRef(null);

//     const onCheckLogin = (e) => {
//         e.preventDefault();

//         if(form.password === "") {
//             setResult("비밀번호를 입력해주세요.");
//             inputPw.current.focus();
//             return false; 
//         }

//         if (USER_ID === form.id && USER_PW === form.password) {
//             setIsLoggedIn(true);
//             setResult("");
//         } else {
//             setIsLoggedIn(false);
//         }
//         inputEl.current.focus();
//     };


//     const onClickLogin = () => {
//         setIsLoggedIn(true);
//     }

//     const onClickLogout = () => {
//         setForm.id("");
//         setForm.password("");
//         setIsLoggedIn(false);
//     }

//     return (
//         <>
//             <div>
//                 {isLoggedIn ? (
//                     <div>
//                         <p style={styles.greeting}>{form.id}님, 환영합니다!</p>
//                         <button onClick={onClickLogout}>로그아웃</button>
//                     </div>
//                 ) : (
//                     <form onSubmit={onCheckLogin}>
//                         <p>아이디 : <input 
//                                     ref={inputEl} 
//                                     type="text" 
//                                     value={form.id}
//                                     onChange={(e) => setForm({...form, id:e.target.value})}
//                                     placeholder="이메일을 입력하세요"
//                                     />
//                         </p>
                        
//                         <p>비밀번호 : <input 
//                                         ref={inputEl} 
//                                         type="password" 
//                                         value={form.password}
//                                         onChange={(e) => setForm({...form, password:e.target.value})}
//                                         placeholder="비밀번호를 입력하세요"
//                                         />
//                         </p>
                        
//                         <button onClick={onCheckLogin}>로그인</button>
//                     </form>
//                 )}
//             </div>
//         </>


//     );
// }

// export default LoginPage2;