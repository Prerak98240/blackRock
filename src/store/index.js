import { computed, observable, action, toJS } from 'mobx'

class Store {
    @observable advanceFilters = [{ "parent": { "name": "abc", "checked": false, "child": [{ "name": "abc1", 'checked': false }, { "name": "abc2", 'checked': false }] }}];
    @observable checkedFilters = [];
    @observable firstName ="";
    @observable lastName ="";
    

    @action
    childChanged(id, i){
        this.advanceFilters[id].parent.child[i].checked = !this.advanceFilters[id].parent.child[i].checked;
    }

    @action
    changeTheParent(id){
        this.advanceFilters[id].parent.checked = !this.advanceFilters[id].parent.checked;

        if(this.advanceFilters[id].parent.checked){
            this.advanceFilters[id].parent.child.forEach(cur => cur.checked =true)
        } else {
            this.advanceFilters[id].parent.child.forEach(cur => cur.checked =false)
        }
    }

    @action
    checkParent(id){
        const result = this.advanceFilters[id].parent.child.reduce((acc, cur) => {

            if(!acc.checked){
                return {checked : false}
            }
            
            if(cur.checked === false) {
                return {checked : false};
            }

            return {checked :true}

        }, {checked : true})

        this.advanceFilters[id].parent.checked = result.checked;

    }

    @action
    addFilter() {
        this.advanceFilters.push({ "parent": { "name": "abcd", "checked": false, "child": [{ "name": "abcd1", 'checked': false }, { "name": "abc2", 'checked': false }] }})
    }

    @action
    submitTheData() {
        this.checkedFilters = this.advanceFilters.filter(cur => cur.parent.checked === true);
    }

    @action
    stringValueChanged(propertyName, changedValue) {
        this[propertyName] = changedValue;
    }

}

var MainStore = window.TodoStore = new Store();

export default MainStore;
