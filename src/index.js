import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux';
import store  from "../src/redux/store"
const queryClient = new QueryClient( )

ReactDOM.render(<QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
</QueryClientProvider>, document.getElementById('root'));
