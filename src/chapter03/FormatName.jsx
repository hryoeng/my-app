import React from "react";

function FormatName() {
    return element;
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: '길동',
    lastName: '이'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

export default FormatName;