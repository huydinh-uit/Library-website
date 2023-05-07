import React from 'react';
import './App.css'
//import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
// import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
// import { oktaConfig } from './lib/oktaConfig';
// import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
// import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
// import LoginWidget from './Auth/LoginWidget';
// import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
// import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
// import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
// import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';

export const App = ()=>{
  return (
      <div>
        <Navbar/>
        <HomePage/>
        <Footer/>
      </div>
  )
}
