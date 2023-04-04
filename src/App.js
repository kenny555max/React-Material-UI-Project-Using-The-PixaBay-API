import React, { Component } from 'react'
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './components/store/store';
import ImageResults from './components/ImageResults/ImageResults';

export class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <CssBaseline />
                <div>
                    <Header />
                    <Search />
                    <ImageResults />
                </div>
            </React.Fragment>
        </Provider>
    )
  }
}

export default App;
