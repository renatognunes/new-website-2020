import React from 'react';
import Layout from './containers/Layout';
import LandingPage from './containers/LandingPage';

function App(): JSX.Element {
    return (
        <Layout>
            <LandingPage />
        </Layout>
    );
}

export default App;
