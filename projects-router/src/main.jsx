import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Slider } from './Components/Slider';
import Product from './Components/Product';
import Home from './Components/Home/Home'
import { SignUp } from './Components/Sign-Up/Sign-Up';
import { SignIn } from './Components/Login/SignIn';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { Profile } from './Components/Profile/Profile';
import { PrivateRoute } from './Components/PrivateRoute';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="SignIn" element={<SignIn />} />
              <Route element={<PrivateRoute />}>
                <Route path="Profile" element={<Profile />} />
                <Route path="Cart" element={<Product />} />
              </Route>
              <Route path="Github" element={<Slider />}>
                <Route path=":userid" element={<Slider />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
} else {
  console.error("Root element with ID 'root' not found.");
}
