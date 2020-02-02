import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout.js';

import Homepage from './components/views/Homepage/Homepage.js';
import Login from './components/views/Login/Login.js';
import Tables from './components/views/Tables/Tables.js';
import Waiter from './components/views/Waiter/Waiter.js';
import Kitchen from './components/views/Kitchen/Kitchen.js';
import BookingId from './components/views/Tables/BookingId';
import BookingNew from './components/views/Tables/BookingNew';
import EventId from './components/views/Tables/EventId';
import EventNew from './components/views/Tables/EventNew';
import OrderId from './components/views/Waiter/OrderId';
import OrderNew from './components/views/Waiter/OrderNew';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={EventNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={EventId} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderId} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
