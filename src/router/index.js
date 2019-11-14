import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
const supportsHistory = 'pushState' in window.history;
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
};
export default () => (React.createElement(BrowserRouter, { forceRefresh: !supportsHistory, getUserConfirmation: getConfirmation }, renderRoutes(routes)));
