import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

import TabTitle from "./TabTitle";
import TabConts from "./TabConts";
import {useEffect} from "react";

const Tab = () => {

    let tabObj = [
        {
            id: uuidv4(),
            title: '제목1',
            conts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum id placeat quia tempore voluptatem?'
        },
        {
            id: uuidv4(),
            title: '제목2',
            conts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ea esse et fugit modi natus officiis pariatur quam quibusdam. Ab alias atque deserunt ducimus ea enim non provident similique veritatis!'
        },
        {
            id: uuidv4(),
            title: '제목3',
            conts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consectetur, deleniti doloribus eos est fuga ipsa iste laudantium natus numquam quis quod recusandae, repellat tempora voluptates voluptatibus voluptatum. Adipisci alias earum illo iusto laboriosam omnis quibusdam quisquam repellat similique, voluptatum.'
        },
    ]

    // useEffect(() => {}, [])

    const ttl = _.reduce(tabObj, (_tot: object[], _cur: {[key: string]: any}, idx:number) => {
        const obj:{ [key:string]: any } = {}
        let keys:string[] = Object.keys(_cur).filter((item) => item !== 'conts');

        for(let i of keys) {
           obj[i] = _cur[i]
        }

        _tot.push(obj)

        return _tot;
    },[])


    console.log(ttl)



    return (
        <>
            <TabTitle></TabTitle>
            <TabConts></TabConts>
        </>

    )
}

export default Tab