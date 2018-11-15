import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

@observer
class AdvanceFilter extends Component {

    constructor(props){
        super();
    }

    addFilter = () => {
        this.props.store.addFilter()
    }

    onChange = (e, id) => {
        console.log("Prerak")
        this.props.store.changeTheParent(id)        
    }

    onChildChange = (e, id, name) => {
        console.log(id)
        this.props.store.childChanged(id, name);
        this.props.store.checkParent(id)
    }

    render() {

        const { advanceFilters } = this.props.store;
        const filterList = advanceFilters.map((filter, id) => {
            return (
                <li key={id}>
                    <h4><input type="checkbox" checked={filter.parent.checked} onChange={e => this.onChange(e, id)} /> <span>{filter.parent.name}</span></h4>
                    <ul>
                        {filter.parent.child.map((x, i) => {
                            return (<li key={i}>
                                <input type="checkbox" checked={x.checked} onChange={e => this.onChildChange(e,id,i)} />
                                {x.name}</li>)
                        })}
                    </ul>
                </li>
            )
        })

        return (
            <div>
                <h2>Advanced Filter</h2>
                <ul>{filterList}</ul>
                <input type="button" onClick={this.addFilter} value="Add Filter" />
            </div>
        );
    }
}

export default AdvanceFilter;
