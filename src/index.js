import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink,  BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import App from './App';
// import * as serviceWorker from './serviceWorker';


import Users from './pages/users';
import Albums from './pages/albums';
import Comments from './pages/comments';
import Photos from './pages/photos';
import Posts from './pages/posts';


import './index.css';

const routing = (
    <div>
        <Router>
            <ul className="div-design">
                <li>
                    <NavLink to = "/" className="design">Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/albums" className="design" >Albums</NavLink>
                </li>
                <li>
                    <NavLink to = "/comments" className="design" >Comments</NavLink>
                </li>
                <li>
                    <NavLink to = "/photos" className="design" >Photos</NavLink>
                </li>
                <li>
                    <NavLink to = "/posts" className="design" >Posts</NavLink>
                </li>
                <li>
                    <NavLink to = "/users" className="design" >Users</NavLink>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route exact path="/" component = {App} />
                <Route path="/albums" component = {Albums} />
                <Route path="/comments" component = {Comments} />
                <Route path="/photos" component = {Photos} />
                <Route path="/posts" component = {Posts} />
                <Route path="/users" component = {Users} />
            </Switch>
        </Router>
    </div>
)


ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
