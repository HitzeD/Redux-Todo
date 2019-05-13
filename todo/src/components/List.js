import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

import Item from './Item';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newItem: '',
        }
    }

    handleChanges = e => this.setState({ newItem: e.target.value });

    addItems = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' })
    }

    render(){
        return (
            <>
                <h1>Todo List</h1>
                <input onChange={this.handleChanges} value={this.state.newItem} type="text" placeholder="Accomplished Me..." />
                <button onClick={this.addItems}>Add Item</button>
                {this.props.task.map((item, index) => {
                    return <Item item={item} key={index} />
                })}
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.todo);
    return {
        task: state.todo,
    }
}

export default connect(mapStateToProps, { addItem })(List);