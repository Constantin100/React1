//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {
  //debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            {/* <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} /> */}

            <Route path='/dialogs/*' Component={() => <Dialogs state={props.appState.dialogsPage}/>} />
            <Route path='/profile' Component={() => <Profile state={props.appState.profilePage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
