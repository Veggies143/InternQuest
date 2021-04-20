import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BeforeLoginPage from './Components/BeforeLoginPage/BeforeLoginPage';
import HeaderBeforeLogin from './Components/HeaderBeforeLogin/HeaderBeforeLogin';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <HeaderBeforeLogin/>
      <BeforeLoginPage/>
      <Footer/>
    </div>
  );
}

export default App;
