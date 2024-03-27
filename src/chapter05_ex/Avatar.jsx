import "./comment.css"

function Avatar(props) {
    return (
        <img className="avatar image"
            src={props.profile.avatarUrl}
            alt={props.profile.name}
        />
    );
}

export default Avatar;
