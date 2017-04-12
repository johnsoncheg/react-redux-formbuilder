import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router';
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSage from './sagas'
import Redbox from 'redbox-react'

//custom router
/*import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';


const browserHistory = useRouterHistory(createHistory)({
    basename: '/formdesign'
});*/

const rootEl = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSage)

render(
  <AppContainer errorReporter={Redbox}>
    <Root store={store} history={browserHistory} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298x
   */
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/Root').default;
    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={store} history={browserHistory} />
      </AppContainer>,
      rootEl
    )
  });
}