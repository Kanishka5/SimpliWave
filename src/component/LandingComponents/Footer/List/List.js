import React from 'react';
import './List.css';

const List = props => (
    <div className={'List'}>
        <table>
            <td>Products</td>
            <tr>Domains</tr>
            <tr>Packages</tr>
            <tr>Pricing</tr>
            <tr>Features</tr>
            <tr>Customer Stories</tr>
        </table>
        <table>
            <td>Company</td>
            <tr>About</tr>
            <tr>Blog</tr>
            <tr>Career</tr>
            <tr>Press</tr>
            <tr>shop</tr>
        </table>
        <table>
            <td>Support</td>
            <tr>Help</tr>
            <tr>Community Forum</tr>
            <tr>Training</tr>
            <tr>Status</tr>
            <tr>Contact</tr>
        </table>
    </div>
);

export default List;