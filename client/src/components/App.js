import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from '../history';

import Header from "../components/Header"
import TaskHome from "./tasks/TaskHome";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import NotesList from "./notes/NotesList";
import ShowNote from "./notes/ShowNote";
import AppHome from "./AppHome";


const App = () => {
  return (
    <Router history={history}>
      <Header/>
      <Switch>
        <Route path="/" exact component={AppHome} />
        <Route path="/tasks" component={TaskHome} />
        <Route path="/tasks/delete/:id" component={TaskHome} />
        <Route path="/tasks/modify/:id" component={TaskHome} />
        <Route path="/notes/new/" component={CreateNote} />
        <Route path="/notes/modify/:id" component={EditNote} />
        <Route path="/notes" component={NotesList} />
        <Route path="/notes/:id" component={ShowNote} />
        <Route path="/notes/delete/:id" component={NotesList} />
      </Switch>
    </Router>
  );
};

export default App;
