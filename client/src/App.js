import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    if (savedList.indexOf(movie) === -1) {
      setSavedList([...savedList, movie]);
    }
  };

  const removeFromSavedList = movie => {
    const adjustedList = [];
    savedList.forEach(oldMovie => {
      if (movie === oldMovie) {
        return;
      } else {
        adjustedList.push(oldMovie);
      }
    });
    setSavedList(adjustedList);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Switch>
          <Route path="/" exact render={props => <MovieList {...props} />} />
          <Route
            path="/movies/:id?"
            render={props => (
              <Movie
                removeMovie={removeFromSavedList}
                saveMovie={addToSavedList}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
