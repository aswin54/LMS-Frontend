import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import CourseDetail from './CourseDetail';
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import Mycourses from './User/Mycourses';
import Favoritecourses from './User/Favoritecourses';
import Recommendedcourses from './User/Recommendedcourses';
import Profilesetting from './User/Profilesetting';
import Changepassword from './User/Changepassword';
import Loginteacher from './Teacher/Loginteacher';
import Registerteacher from './Teacher/Registerteacher';
import Dashboardteacher from './Teacher/Dashboardteacher';
import Addcourse from './Teacher/Addcourse';
import Mycoursesteacher from './Teacher/Mycoursesteacher';
import Myusers from './Teacher/Myusers';
import Profilesettingteacher from './Teacher/Profilesettingteacher';
import Changepasswordteacher from './Teacher/Changepasswordteacher';
import Teacherdetail from './Teacherdetail';
import Allcourses from './Allcourses';
import Popularcourses from './Popularcourses';
import Popularteachers from './Popularteachers';
import Categorycourses from './Categorycourses';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:course_id' element={<CourseDetail />}/>
        <Route path='/teacherdetail/:teacher_id' element={<Teacherdetail/>}/>
        <Route path='/allcourses' element={<Allcourses />}/>
        <Route path='/popularcourses' element={<Popularcourses />}/>
        <Route path='/popularteachers' element={<Popularteachers />}/>
        <Route path='/category/:categoty_slug' element={<Categorycourses />}/>

        <Route path='/user-login' element={<Login />}/>
        <Route path='/user-register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/my-courses' element={<Mycourses />}/>
        <Route path='/favourite-courses' element={<Favoritecourses />}/>
        <Route path='/recommended-courses' element={<Recommendedcourses />}/>
        <Route path='/Profile' element={<Profilesetting />}/>
        <Route path='/changepassword' element={<Changepassword />}/>

        <Route path='/teacher-login' element={<Loginteacher />}/>
        <Route path='/teacher-register' element={<Registerteacher />}/>
        <Route path='/teacher-dashboard' element={<Dashboardteacher />}/>
        <Route path='/teacher-courses' element={<Mycoursesteacher />}/>
        <Route path='/add-course' element={<Addcourse />}/>
        <Route path='/teacher-users' element={<Myusers />}/>
        <Route path='/teacher-profile' element={<Profilesettingteacher />}/>
        <Route path='/resetpassword' element={<Changepasswordteacher />}/>
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
