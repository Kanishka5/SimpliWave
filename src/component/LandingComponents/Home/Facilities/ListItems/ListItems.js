import React from 'react';
import ListItem from "./ListItem/ListItem";
import image1 from '../../../../../assets/image/undraw_web_developer_p3e5.svg'

const fac1 = {
    image: image1,
    body: <div>
        <h3>Write better code</h3>
        <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build. Learn about code review.</p>
    </div>
};

const ListItems = props => {
    return (
        <div>
            <ListItem image={fac1.image}>{fac1.body}</ListItem>
            <ListItem image={fac1.image}>{fac1.body}</ListItem>
            <ListItem image={fac1.image}>{fac1.body}</ListItem>
        </div>
    );
};

export default ListItems;