import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducer from "reducer";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "semantic-ui-css/semantic.min.css";
import App from "container/App";
import registerServiceWorker from "util/registerServiceWorker";


/**
 * Axios Configuration
 */
axios.defaults.baseURL = "/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = window.location.host;
axios.defaults.xsrfHeaderName = "X-CSRFToken";


/**
 * Globa; State Configuration
 */
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);


/**
 * DOM Injection
 */
ReactDOM.render(
    <Provider store={store}>
        <main id="app_container">
            <NotificationContainer/>
            <App/>
        </main>
    </Provider>
,document.getElementById("root"));

registerServiceWorker();
