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
          <Route path="/" exact render={(props) => <MovieList {...props}/>} />
          <Route path="/movies/:id?" render={(props) => <Movie {...props}/>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
