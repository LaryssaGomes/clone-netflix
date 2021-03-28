import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20160220053054%21Netflix_2015_logo.svg" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://3.bp.blogspot.com/--U3VZcvh954/WMloM41_fBI/AAAAAAAAJKs/PMTN6allydIWwWZTrFXf_5r_7UdqfO-cACLcB/s1600/checked_user1600.png"/>
                </a>
            </div>
        </header>
    );
}