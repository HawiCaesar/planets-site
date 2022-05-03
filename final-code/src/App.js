import { MainNavigation } from './components/MainNavigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
     
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <div className='App'>
                <MainNavigation />
              </div>
            }
          >
            {/* <Navigate to='/earth' /> */}
          </Route>
          {/* <Route
          path={`/earth`}
          exact
          element={
            <div className='App'>
              <MainNavigation />
            </div>
          }
        /> */}
          <Route path='/:param' element={<div>No</div>} />
        </Routes>
      </Router>
  );
}

export default App;
