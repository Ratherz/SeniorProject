import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './page/index';
import Invigilator from './page/Invigilator';
// import Dashboard from './page/dashboard';
// import Favorites from './page/favorite';
// import Drivepage from './page/drivepage';
// import Trash from './page/trash';
// import Landing from './component/Landing';
// import Login from './component/Login';
// import Register from './component/Register';
// import Profile from './component/Profile';
// import CardNews from './CardNews';
// import New from './New';

export default () => (
    <Switch>
        {/* <Route exact path="/manage"  component={Index} /> */}
        <Route exact path="/invigilator"  component={Invigilator} />
        {/* <Route path="/drive/dashboard" component={Dashboard}/>
        <Route path="/drive/index" component={Index} />
        <Route path="/drive/favor" component={Favorites} />
        <Route path="/drive/my-drive" component={Drivepage} />
        <Route path="/drive/trash" component={Trash} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/drive/profile" component={Profile} /> */}
        {/* <Route path ="/cardnews" component={CardNews}/>
        <Route path ="/new" component={New}/> */}
    </Switch>
)