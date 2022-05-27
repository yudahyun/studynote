import React from 'react';
import Nav from "./Nav";
import Header from "./Header";

const Container = () => {
    return (
        <div className="container position-relative">
            <Nav/>
            <Header/>
        </div>
    );
};

export default Container;