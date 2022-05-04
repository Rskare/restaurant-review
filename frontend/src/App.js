import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="/home">Restaurant Reviews</a>
                <button class="navbar-toggler bg-info text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <Link to={"/home"} className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/restaurants"} className="nav-link">
                        Restaurants
                      </Link>
                    </li>
                    <li class="nav-item">
                      { user ? (
                        <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                          Logout ({user.name})
                        </a>
                      ) : (            
                        <Link to={"/login"} className="nav-link">
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
            </div>
      </nav>
      {/* Pages */}
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} render={(props) => (
              <Home {...props} user={user} />
            )} />
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
