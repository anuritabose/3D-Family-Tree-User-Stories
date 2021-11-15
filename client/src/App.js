import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";
import SingleArticle from "./components/SingleArticle";
import FamilyTree from "./components/FamilyTree"
import AddMember from "./components/AddMember"
import AddRelation from "./components/AddRelation"
import Comment from "./components/Comment"



function App() {
  const [posts, setPosts] = useState([]);
  const [memberdetails, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("/members")
      .then(res => setMembers(res.data))
      .catch(error => console.log(error))
  }, []);
  
    return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={props => <SingleArticle {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={props => <EditArticle {...props} posts={posts} />}
      />
      <Route
        path="/article/:id/comment"
        render={props => <Comment {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Route 
        path="/display-tree"
        render={props => <FamilyTree {...props} memberdetails={memberdetails}/>}
      />
      <Route path="/add-member" component={AddMember} />
      <Route
        path="/:id/add-relation"
        render={props => <AddRelation {...props} memberdetails={memberdetails}/>}
      />
      <Footer />
    </div>
  );
}

export default App;
