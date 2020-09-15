import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let { index, handleItemDelete } = this.props
        handleItemDelete(index)
    }

    render() {
        let { item } = this.props
        return(
            <li>
                <span>{item}</span>
                <span className="icon-close" onClick={this.handleClick}>X</span>
            </li>
        );
    }
}

export default TodoItem