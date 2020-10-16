import style from './App.less';

import React, { FC } from 'react';
import { Button } from 'antd';
import { Button as Go } from 'antd-mobile';



const App: FC = () => (
  <div className={style.go}>
    <Button type="primary">Button</Button>
    <Go>Button-mobile</Go>
  </div>
);

export default App;
