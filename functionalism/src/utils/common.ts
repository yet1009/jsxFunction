import axios, { AxiosResponse } from "axios";
import _ from 'lodash';
import pageConts from "../store/pageStore";

export async function getList() {
    let results = await axios('https://jsonplaceholder.typicode.com/todos/').then((res: AxiosResponse<any>) => res.data)

    const info = _.reduce(results, (tot: {[key:string]: string}[], res:{[key:string]: string}, idx) => {

        const data:{[key:string]: string} = {};

        data['id'] = res['id'];
        data['title'] = res['title'];

        tot.push(data);

        return tot;
    }, [])

    pageConts.setData(info)

    return info;
}





