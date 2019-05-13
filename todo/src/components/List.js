import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import styled from 'styled-components';

import Item from './Item';

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
                <Head>
                    <h1>Todo List</h1>
                    <input onChange={this.handleChanges} value={this.state.newItem} type="text" placeholder="Accomplished Me..." />
                    <button onClick={this.addItems}>Add Item</button>
                </Head>
                <ItemWrap>
                    {this.props.task.map((item, index) => {
                        return <Item item={item} key={index} />
                    })}
                </ItemWrap>
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