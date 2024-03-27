import Avatar from "./Avatar";
import "./comment.css"

function UserInfo(props) {
    return (
        <div className="user-info imageContainer">
            {/* Avatar 컴포넌트 */}
            <Avatar profile={props.user}/>
        </div>
    );
}

export default UserInfo;