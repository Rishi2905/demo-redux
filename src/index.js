import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserListing from './pages/user/UserListing';
import UserInfoPage from './pages/userInfo/UserInfoPage';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/home';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import UserInfoPage1 from './pages/userInfo1/UserInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/pages/userListing' element={<UserListing></UserListing>}>
          </Route>
          <Route path='/pages/userInfo' element={<UserInfoPage></UserInfoPage>}>
          </Route>
          <Route path='/pages/userInfo/:id' element={<UserInfoPage1></UserInfoPage1>}>
          </Route>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}>
          </Route>
          {/* <Provider store={store}>
          <App />
        </Provider> */}

        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
