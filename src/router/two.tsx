import React, { Component } from 'react';


interface ComponentState {
    go: string
}

export default class Two extends Component<any, ComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            go: "Two"
        }
    }
    
    render() {
        console.log(this.props);
        console.log(this.state.go);
        return (
            <div>
                <div>hello two</div>
                <div>state.name---{this.state.go}</div>
            </div>

        )
    }


}

