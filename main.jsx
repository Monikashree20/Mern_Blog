import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/signup.jsx'
import CreateBlog from './components/createBlog.jsx'
import Blogpage from './components/blogPages.jsx'
import Foodpage from './components/foodblog.jsx'
import EducationPage from './components/educationblog.jsx'
import HealthPage from './components/healthblog.jsx'
import Latestpage1 from './components/latestpage1.jsx'
import Latestpage2 from './components/latestpage2.jsx'
import Latestpage3 from './components/latestpage3.jsx'
import Fooditem1 from './components/fooditem1.jsx'
import Fooditem2 from './components/fooditem2.jsx'
import Fooditem3 from './components/fooditem3.jsx'
import Health1 from './components/healthpage.jsx'
import Healthpage2 from './components/healthpage2.jsx'
import Health3 from './components/healthpage3.jsx'
import Edupage1 from './components/edupage1.jsx'
import Edu2 from './components/edupage2.jsx'
import Edu3 from './components/edupage3.jsx'
import SportPage from './components/sportsblog.jsx'
import BusinessPage from './components/Businessblog.jsx'
import EnvironmentPage from './components/envirblog.jsx'
import FirstPage from './components/FirstPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/blogpage' element={<Blogpage/>}/>
      <Route path='/login1' element={<Login/>}/>
      <Route path='/blogpage' element={<FirstPage/>}/>
      <Route path='/signupbtn' element={<Blogpage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/blogcreate' element={<CreateBlog/>}/>
      <Route path='/food' element={<Foodpage/>}/>
      <Route path='/education' element={<EducationPage/>}/>
      <Route path='/health' element={<HealthPage/>}/>
      <Route path='/latest1' element={<Latestpage1/>}/>
      <Route path='/latest2' element={<Latestpage2/>}/>
      <Route path='/latest3' element={<Latestpage3/>}/>
      <Route path='/food1' element={<Fooditem1/>}/>
      <Route path='/food2' element={<Fooditem2/>}/>
      <Route path='/fooditem3' element={<Fooditem3/>}/>
      <Route path='/healthblog2' element={<Healthpage2/>}/>
      <Route path='/healthblog3' element={<Health3/>}/>
      <Route path='/edublog1' element={<Edupage1/>}/>
      <Route path='/edublog2' element={<Edu2/>}/>
      <Route path='/edublog3' element={<Edu3/>}/>
      <Route path='/sports' element={<SportPage/>}/>
      <Route path='/business' element={<BusinessPage/>}/>
      <Route path='/environment' element={<EnvironmentPage/>}/>
      <Route path='/healthblog1' element={<Health1/>}/>
    </Routes>
    </BrowserRouter>
)
