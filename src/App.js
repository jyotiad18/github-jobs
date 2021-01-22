import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Loader from './components/Loader';
import JobDetail from './components/JobDetail';

import axios from './axios.js';
import {setJobs, selectJobs } from './reducers/jobsSlice';

function App() {
  const dispatch = useDispatch(); 
  const { isLoading, fulltimeQuery, locationSearchQuery, descriptionSearchQuery } = useSelector(selectJobs);

  useEffect(() => {
    async function getJobs() {  
      let description = descriptionSearchQuery !== '' ? `${descriptionSearchQuery}` : '';       
      let isFullTime = fulltimeQuery ? `full_time=true&` : '';
      let location = locationSearchQuery !== '' ? `${locationSearchQuery}` : '';
      
      const response = await axios.get(`https://github-jobs-proxy.appspot.com/positions?description=${description}&${isFullTime}location=${location}`);
      const data = await response.data;
      dispatch(setJobs({ data: data }));
     }
    getJobs();  
  },[dispatch, locationSearchQuery, fulltimeQuery, descriptionSearchQuery])

  return (
    <Router>
    <div className="app">
     <Header />        
          <Switch> 
           <Route exact path='/job/:id'>
            <JobDetail />
          </Route>           
           <Route exact path='/'>
             { !isLoading ? <Jobs /> : <Loader /> }
          </Route> 
        </Switch>
      <Footer />
      </div>  
    </Router>    
  );
}

export default App;
