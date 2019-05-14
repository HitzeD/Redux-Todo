import React from 'react';
import styled from 'styled-components';

const Items = styled.h4`
    border: 1px solid black;
    width: 25%;
    padding: 20px;
    margin: 10px;
    -webkit-box-shadow: 10px 10px 43px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 43px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 43px 0px rgba(0,0,0,0.75);
`

const Item = props => {
    return <Items>{props.item.task}</Items>
}

export default Item;