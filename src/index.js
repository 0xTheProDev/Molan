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
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = window.location.host;
// axios.defaults.headers.common["X-CSRFToken"] = document.querySelector("meta[name='_csrf_token']").getAttribute("content");;


/**
 * Global State Configuration
 */
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/**
 * DOM Injection
 */
ReactDOM.render(
    <main id="app_container">
        <NotificationContainer/>
        <Provider store={store}>
            <App/>
        </Provider>
    </main>
,document.getElementById("root"));

registerServiceWorker();
