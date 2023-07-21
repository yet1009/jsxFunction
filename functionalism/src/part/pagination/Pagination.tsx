import PageList from "./PageList";
import PageNum from "./PageNum";

const Pagination = () => {



    return (
        <>
            <ul className='paging'>
                <PageList />
            </ul>
            <div className='pagination_wrap'>
                <PageNum />
            </div>
        </>
    )
}

export default Pagination;