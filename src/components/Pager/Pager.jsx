import {React, useEffect} from 'react';
import './Pager.scss';
import {Link, useSearchParams, useLocation} from 'react-router-dom';



function Pager(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    //prepare buttons to be rendered
    var buttons = [];

    //if we just started counting and our pager is on the first pages
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
    let count = props.count ? parseInt(props.count) : 9;
    const total = parseInt(props.total);
    if (total < count) count = total;
    const halfcount = Math.floor(parseInt(count/2));


    const handleFirst = (e) => {
        e.preventDefault();
        const newSearch = searchParams;
        newSearch.delete("page");
        newSearch.append("page", 1);
        setSearchParams(newSearch);
        props.setPage(page+1);
    }

    const handlePrev = (e) => {
        e.preventDefault();
        const newSearch = searchParams;
        newSearch.delete("page");
        newSearch.append("page", page-1);
        setSearchParams(newSearch);
        props.setPage(page+1);
    }

    const handleButton = (e) => {
        e.preventDefault();
        const newSearch = searchParams;
        newSearch.delete("page");
        newSearch.append("page", e.target.innerHTML);
        setSearchParams(newSearch);
        props.setPage(e.target.innerHTML);
    }

    const handleNext = (e) => {
        e.preventDefault();
        const newSearch = searchParams;
        newSearch.delete("page");
        newSearch.append("page", page+1);
        setSearchParams(newSearch);
        props.setPage(page+1);
    }

    const handleLast = (e) => {
        e.preventDefault();
        const newSearch = searchParams;
        newSearch.delete("page");
        newSearch.append("page", total);
        setSearchParams(newSearch);
        props.setPage(page+1);
    }

    if(page <= halfcount) {
        for(var i = 0; i < count; i++) {
            let num = i+1;
            buttons.push(<button onClick={handleButton} key={num} className={'pagination-btn ' + (num === page ? "pagination-btn-selected" : "")}>{num}</button>);
        }
    }
    //if our pager near the end and we cant scroll or add more buttons anymore
    else if(page > total-halfcount) {
        for(var i = 0; i < count; i++) {
            let num = total-(count-i-1);
            buttons.push(<button onClick={handleButton} key={num} className={'pagination-btn ' + (num === page ? "pagination-btn-selected" : "")}>{num}</button>);
        }
    } else {
        for(var i = 0; i < count; i++) {
            let num = page-halfcount+i;
            buttons.push(<button onClick={handleButton} key={num} className={'pagination-btn ' + (num === page ? "pagination-btn-selected" : "")}>{num}</button>);
        }
    }


    


    useEffect(() => {

    });

    return (
        <div className='pagination-buttons column-wrapper flexcenter'>
        
        {/* show buttons only when needed */}
        {page > 1 ? <>
            <button className='pagination-btn' onClick={handleFirst}>First</button>
            <button className='pagination-btn' onClick={handlePrev}>Prev</button>
        </>
        :""}

        {buttons}

        {page < total ? <>
            <button className='pagination-btn' onClick={handleNext}>Next</button>
            <button className='pagination-btn' onClick={handleLast}>Last</button>
        </>
        :""}
        </div>
    );
}

export default Pager;