import React from 'react';
import Navbar from '../components/Navbar';

interface LayoutProps {
    children: JSX.Element;
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className="wrapper">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
