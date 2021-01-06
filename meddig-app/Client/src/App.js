import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducer, { appState } from "./reducers/main";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Assessment from "./components/assessment";
import HospitalsPage from "./components/Hospitals";
import section_1 from "./components/About";
import Navbar from "./components/Navbar";
import CurrentData from "./components/Current";

export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(appState, reducer);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Route path={"/login"} component={Login} />
            <Route path={"/signup"} component={Signup} />
            <Route path={"/assessment"} component={Assessment} />
            <Route path={"/hospital"} component={HospitalsPage} />
            <Route path={"/currentdata"} component={CurrentData} />
            <Route path={"/Aboutcovid"} component={section_1} />
            <Route exact={true} path={"/"} component={Home} />
          </AppContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
