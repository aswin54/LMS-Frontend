import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import CourseDetail from './CourseDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:course_id' element={<CourseDetail />}/>
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
