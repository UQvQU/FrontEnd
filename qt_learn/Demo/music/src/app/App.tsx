import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Loadable from 'react-loadable';
import Loading from '../reusableComponents/loading/Loading';
import Header from '../components/header/Header';
import Tab from '../components/tab/Tab';
import Recommend from '../components/recommend/Recommend';
import Player from '../components/player/Player';
import Search from '../components/search/Search';

// import './reset.styl';
// 容器组件

const App: React.FC = () => {
  return (
    <div>
        <Header />
        <Tab />
        <Switch>
            {/*配置默认路由*/}
            <Route
                exact
                path="/"
                render={() => <Redirect to="/recommend" />}
            />
            <Route path="/recommend" component={Recommend}/>
            <Route path="/rank" component={Rank}/>
            <Route path="/search" component={Search}/>
            <Route path="/singer" component={Singer}/>
        </Switch>
        <Route path="/user" component={UserCenter}/>
        <Player/>
    </div>
  );
}

export default App;

const Rank = Loadable({
        loader: () => {return import(/* webpackChunkName: "Rank" */ '../components/rank/Rank')},
        loading: () => <Loading text={"按需加载"}/>
    });
const Singer = Loadable({
        loader: () => {return import('../components/singer/Singer')},
        loading: () => <Loading text={"按需加载"}/>
});

const UserCenter = Loadable({
        loader: () => {return import(/* webpackChunkName: "UserCenter" */ '../components/user-center/UserCenter')},
        loading: () => <Loading text={"按需加载"}/>
});
