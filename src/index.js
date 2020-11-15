// import React from 'react';
// import ReactDOM from 'react-dom';

import React from './react';
import ReactDOM from './react-dom';

import { updateQueue } from './Component'

class Counter extends React.Component {

    state = {
        number: 0
    }

    // event 是事件对象，但是它并不是DOM原生的，而是进过 React 封装的
    handleClick = (event) => {

        this.setState({
            number: this.state.number+1
        })
        console.log(this.state.number)   //0

        this.setState({
            number: this.state.number+1
        })
        console.log(this.state.number)  //0

        setTimeout(() => {
            console.log(this.state.number)  // 1

            this.setState({
                number: this.state.number+1
            })
            console.log(this.state.number) // 2

            this.setState({
                number: this.state.number+1
            })
            console.log(this.state.number)  // 3
        })

    }

    handleClick2 = () => {
        console.log('冒泡触发了嘛')
    }

    render() {
        return <div onClick={this.handleClick2}>
            <button onClick={this.handleClick}>+</button>
            <div>number: {this.state.number}</div>
        </div>
    }
}

let element = <Counter />

// console.log(<button onClick={() => {}}>123</button>)

ReactDOM.render(
    element,
    document.getElementById('root')
);
