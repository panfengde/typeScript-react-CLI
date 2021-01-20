import React from 'react'
import One from './one'


export default class Hello extends React.Component<{}, {}>{
    render() {
        return <div>
            <p>hello组件</p>
            <One title={"看到这个"} />
        </div>
    }
}