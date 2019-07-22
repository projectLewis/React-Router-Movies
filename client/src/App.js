import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        {console.log(savedList)}
        <SavedList list={savedList} />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
