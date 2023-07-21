import {observer} from "mobx-react";
import pageConts from "../../store/pageStore";
import {useEffect, useState} from "react";

function splitArr(arr:{[key: string]: string}[], chunk:number = 10) {

    const result = [];

    while(arr.length > 0) {
        let tempArr;
        tempArr = arr.splice(0, chunk)
        result.push(tempArr)
    }

    return result;
}



const PageList = observer(() => {

    let data:{[key: string]: string}[] = pageConts.getData();
    let newArr = splitArr(data);


    return (
        <li></li>
    )
})

export default PageList;