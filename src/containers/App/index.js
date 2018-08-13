
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import Header from './../../components/Header'

// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import HomePage from './../HomePage';
// import StatPage from 'containers/StatPage/Loadable';
// import UsersPage from 'containers/UsersPage/Loadable';

// import { blockInterface, unBlockInterface } from './actions'

// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';


// import reducer from './reducer';
// import injectReducer from 'utils/injectReducer';
// import saga from './saga';
// import injectSaga from 'utils/injectSaga';

const history = createHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.initApp()
  }


  render() {
    return (
      <div>
        <Header/>
        {/* <Router>
          <Switch> */}
            {/* <HomePage/> */}
          {/* </Switch>
        </Router> */}
      </div>
      // <HomePage/>
      // <div>
      // {/* <AppWrapper> */}
      //   <Helmet
      //     titleTemplate="%s <-> Anton-edition"
      //     defaultTitle="Anton App"
      //   >
      //     <meta name="description" content="Anton App" />
      //   </Helmet>

      //   {/* <ConnectedRouter history={history}> */}
      //     <Switch>
      //       <Route exact path="/" component={HomePage} />
      //       {/* <Route path="/stat" component={StatPage} />
      //       <Route path="/users" component={UsersPage} />
      //       <Route path="" component={NotFoundPage} /> */}
      //     </Switch> 
      //   {/* </ConnectedRouter> */}
      //  {/* </AppWrapper> */}
      // </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    //initApp: () => dispatch(initApp()),
    };
}

// const mapStateToProps = createStructuredSelector(
//   {
//     //Autorized: makeSelectAutorized(),
//   }
// );

//const withConnect = connect(mapStateToProps, mapDispatchToProps)

// const withReducer = injectReducer({ 
//   key: 'app', reducer
//  });

//const withSaga = injectSaga({ key: 'app', saga });


export default App;


// export default withRouter(
//   compose(
//   //  withReducer,
//   //  withSaga,
//    withConnect,
//  )(App));

