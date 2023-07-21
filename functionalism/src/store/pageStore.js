import {makeAutoObservable, toJS} from "mobx";
import {getList} from "../utils/common";
import _ from "lodash";




class PageConts {

    page = [];
    len = 0;

    constructor() {
        makeAutoObservable(this)
    }

     setData(data) {
        this.page = [...data];
        const result = [];

        while(this.page.length > 0) {
            let tempArr;
            tempArr = this.page.splice(0, 10)
            result.push(tempArr)
        }

        this.len = result.length;

        return result;
    }

    getData() {
        return toJS(this.page);
    }

    lenCheck() {
        return this.len;
    }

}

let pageConts = new PageConts();
export default pageConts;