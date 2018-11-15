import React, { Component } from 'react';
import {  inject, observer } from 'mobx-react';
import { NavLink, withRouter } from 'react-router-dom';

@withRouter
@inject(`store`)
@observer
class SubmitComponent extends Component {
    onClick = () => {
        console.log("Clicked!!")
    }
    render() {

        const { checkedFilters } = this.props.store;

        const filterList = checkedFilters.map((filter, id) => {
            return (
                <li key={id}>
                    <h4><input type="checkbox" checked={filter.parent.checked} onChange={e => this.onChange(e, id)} /> <span>{filter.parent.name}</span></h4>
                    <ul>
                        {filter.parent.child.map((x, i) => {
                            return (<li key={i}>
                                <input type="checkbox" checked={x.checked} onChange={e => this.onChildChange(e, id, i)} />
                                {x.name}</li>)
                        })}
                    </ul>
                </li>
            )
        })

        return (
            <div>
                <h2>Submitted Data </h2>
                <ul>{filterList}</ul>
                <button onClick={this.onClick} >
                    <NavLink to="/"> Back to Home </NavLink>
                </button>
            </div>
        );
    }
}

export default SubmitComponent;
