import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";

const initialCurrentUser = {
  userId: null,
  token: null,
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(initialCurrentUser);
  const logout = () => setCurrentUser(initialCurrentUser);
  const isUserLoggedIn = Boolean(currentUser.userId);
  console.log(currentUser);
  return (
    <Router>
      <NavBar logout={logout} isUserLoggedIn={isUserLoggedIn} />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/post">
          <PostPage />
        </Route>
        <Route path="/PostDetailPage/:id">
          <PostDetailPage />
        </Route>
        <Route path="/login">
          <LoginPage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        </Route>
        <Route
          path="/profile"
          render={() => {
            if (!isUserLoggedIn)
              return (
                <LoginPage
                  title="You need to login to continue"
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              );
            else return <ProfilePage currentUser={currentUser} />;
          }}
        ></Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
