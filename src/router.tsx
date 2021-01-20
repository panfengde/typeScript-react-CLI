import React from "react";
import {
    HashRouter,
    //BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from './reducer';


import Hello from './router/gogo';
import Two from './router/two';


// 引入antd相关
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';

const App = () => {
    return (
        <Provider store={store}>
            <ConfigProvider locale={zh_CN}>
                <HashRouter>
                    <Switch  >
                        <Route exact={true} path="/" render={() => "typeScript+react+react-router-dom+redux+antd"} />
                        <Route exact={true} path="/one" component={Hello} />
                        <Route exact={true} path="/two" component={Two} />
                    </Switch>
                </HashRouter>
            </ConfigProvider>
        </Provider>
    );
}

export default App;




