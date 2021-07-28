// @flow
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterProvider from '../../context/Register/RegisterProvider';

// UI
import Header from './../../components/Header';
import AppContainer from '../../components/AppContainer/AppContainer';

// Pages
const Home = React.lazy(() => import('./../../pages/Home'));
const OrderType = React.lazy(() => import('./../../pages/OrderType'));
const OrderFlavor = React.lazy(() => import('./../../pages/OrderFlavor'));

function Routes(): React$Element<any> {
    return (
        <RegisterProvider>
            <>
                <Header />
                <AppContainer>
                    <Suspense fallback={<div>Loading...</div>}>
                        <BrowserRouter basename="/">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/type" component={OrderType} />
                                <Route exact path="/flavor" component={OrderFlavor} />
                            </Switch>
                        </BrowserRouter>
                    </Suspense>
                </AppContainer>
            </>
        </RegisterProvider>
    )
}

export default Routes;
