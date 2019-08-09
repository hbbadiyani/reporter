import React from 'react';
import ReactDOM from 'react-dom';


import { Route, HashRouter, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk'; // Helpful for async action workflow
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import SummaryView from './components/summary-view';
import ReportView from './components/report-view';
import RequirementDescription from './components/requirement-description';

import state from './state';
import referenceLinks from './LinksToBUIReference.json';

export default class App {
    constructor(deps, reports) {
        const { translations } = deps;
        const { languageCode } = translations;
        this.reports = reports;
        this.translations = translations.messages;
        this.locale = languageCode.split('-')[0]; // eslint-disable-line prefer-destructuring
    }

    render(container) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
        const initialState = {
            Reports: this.reports,
            ReferenceLinks: referenceLinks
        };

        const store = createStore(state, initialState,
            composeEnhancers(
                applyMiddleware(
                    thunkMiddleware
                )
            ));

        ReactDOM.render((
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={SummaryView} />
                        <Route exact path="/:scan" component={ReportView} />
                        <Route exact path="/:scan/:requirement" component={RequirementDescription} />
                    </Switch>
                </HashRouter>
            </Provider>
        ), container);
    }
}
