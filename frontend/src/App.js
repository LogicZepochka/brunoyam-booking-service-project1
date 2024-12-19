import logo from './logo.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from './pages/MainPage/MainPage';
import LogIn from './pages/LogIn/LogIn';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/LogIn/components/ForgotPassword';
import LoginForm from './pages/LogIn/components/LoginForm';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ForgotPasswordPinCode from './pages/LogIn/components/ForgotPasswordPinCode';
import ForgotPasswordChange from './pages/LogIn/components/ForgotPasswordChange';
import { createContext, useContext, useState } from 'react';
import UserContext from './context/UserContext/UserContext.js';
import UserProvider from './context/UserContext/UserProvider.js';
import MainLayout from './pages/Layouts/MainLayout.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import RoomPage from './pages/RoomPage/RoomPage.jsx';


const CheckLogin = (props) => {
    const {currentUser, setUser} = useContext(UserContext); 

    return (<>
      {!currentUser ? "Unauthorized" : `Hello, ${currentUser.name}!`}
      </>
    )

}

function App() {
  const [currentUser,setUser] = useState(null);

  const UserContext = createContext(null);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="room" element={<RoomPage />} />
          </Route>
          <Route path='/login' element={<LogIn />}>
              <Route index element={<LoginForm />} />
              <Route path='restore' element={<ForgotPassword />} />
              <Route path='restorePin' element={<ForgotPasswordPinCode />} />
              <Route path='restorePassword' element={<ForgotPasswordChange />} />
          </Route>
          <Route path='/registration' element={404} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
