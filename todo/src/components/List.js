import React from 'react';
import { connect } from 'react-redux';
import { addItem, completeMe } from '../actions';
import styled from 'styled-components';

import './component.css';

const Head = styled.div`
    border-bottom: 1px dashed black;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: lightslategray;
`

const ItemWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`
const Item = styled.h3`
    border: 1px solid black;
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 41px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 41px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 41px 0px rgba(0,0,0,0.75);
`

class List extends React.Component{
    constructor(){
        super();
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

    toggleItem = id => {
        this.props.completeMe(id);
    }

    render(){
        return (
            <>
                <Head>
                    <h1>Todo List</h1>
                    <input onChange={this.handleChanges} value={this.state.newItem} type="text" placeholder="Accomplish Me..." />
                    <button onClick={this.addItems}>Add Task</button>
                </Head>
                <ItemWrap>
                    {this.props.todo.map(item => {
                        return <Item className={`${item.completed ? ' completed' : ''}`} key={item.id} onClick={() => this.toggleItem(item.id)}>{item.task}{item.completed}</Item>
                    })}
                </ItemWrap>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.todo.map(item => {return item.completed}))
    return {
        todo: state.todo,
    }
}

export default connect(mapStateToProps, { addItem, completeMe })(List);