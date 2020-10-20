import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";

interface Props {
    cName: string,
    cAge: number,
    changeName?: any
}

interface State {
    name: string,
    age: number,
}

interface ComponentState {
    go: string
}

class One extends Component<Props, ComponentState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            go: "hhh"
        }
    }


    render() {
        console.log(this.props);
        console.log(this.state.go);
        return (
            <div>
                <div>hello one</div>
                <div>state.name---{this.state.go}</div>
                <div>props.name---{this.props.cName}</div>
            </div>

        )
    }

    componentDidMount() {
        console.log(this.props)
        setTimeout(() => {
            this.props.changeName({
                name: 'jack'
            });
        }, 1500);
    }
}

// 把state放到props里
function mapStateToProps(state: State) {
    console.log(state)
    return {
        cName: state.name,
        cAge: state.age,
    }
}

// 把方法放到props里
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changeName: (payload: object) => dispatch({ type: 'CHANGE_NAME', payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(One);