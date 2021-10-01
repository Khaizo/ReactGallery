import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({description, children}) => {
    return (
        <>
        <Helmet>
            <title>Test Front-End React</title>
            <meta name = "description" content={description} />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}

export default Layout;
