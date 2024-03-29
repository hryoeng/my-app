function MailBox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 &&
                <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>
            }
        </div>
    );
}

function Counter3() {
    const count = 0;

    return (
        <div>
            {/* count 값이 0이 들어가서 <div>0</div> 결과가 나옴 */}
            { count && 
                <h1>현재 카운트 : {count}</h1>  // 0은 falsy 값
            }
        </div>
    );
}

export default Counter3;