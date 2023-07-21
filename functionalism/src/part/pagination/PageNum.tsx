import {observer} from "mobx-react";
import pageConts from "../../store/pageStore";
import {useEffect, useState} from "react";

    const PageNum = observer(() => {

    let l = Array.from({length:  pageConts.lenCheck()}, (x,y) => y + 1);
    const [pageNum, setPageNum] = useState(l)


    useEffect(() => {

        console.log(l)
    }, [])

    return (
        <>
            <div className='btn_box'>
                <button
                    type='button'
                    onClick={() => {}}
                    className='btn btn_prev'
                >이전</button>
            </div>
            <ul className='page_wrap'>
                {
                    (l||[]).map((page, idx) => {
                        return <li><button onClick={() => {}} className='btn btn_num'>{page}</button></li>
                    })
                }
            </ul>
            <div className='btn_box'>
                <button
                    type='button'
                    onClick={() => {}}
                    className='btn btn_next'
                >다음</button>
            </div>
        </>
    )
})

export default PageNum;