
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DataProvider } from './context/dataContext';
import Home from './page/home';
import Layout from './page/layout';
import Loginform from './page/login-form';
import MyPage from './page/myPage';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Layout/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/loginform' element={<Loginform/>} />
          <Route path='/mypage' element={<MyPage/>} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
