import {React, useState, useEffect, useRef} from 'react';
import './Mercenaries.scss';
import Mercenary from '../../components/Mercenary/Mercenary';
import Pager from '../../components/Pager/Pager';
import {useLocation, useSearchParams, useNavigate, createSearchParams} from 'react-router-dom';

function Mercenaries() {
    const [mercenaries, setMercenaries] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(searchParams.get("page"));
    const [resultsPerPage, setResultsPerPage] = useState(25);
    const [race, setRace] = useState(searchParams.get("race"));
    const [occupation, setOccupation] = useState(searchParams.get("occupation"));
    const [experience, setExperience] = useState(searchParams.get("experience"));
    const location = useLocation();
    const navigate = useNavigate();
    const apiGetUserUrl = process.env.REACT_APP_API_BASE_URL+'/api/users/getListedUsers';

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(location.search);
        var searchParams = [];
        if(race) searchParams.push(["race", race]);
        if(occupation) searchParams.push(["occupation", occupation]);
        if(experience) searchParams.push(["experience", experience]);
        if(page) searchParams.push(["page", page]);
        
        //we also need to update location here
        location.search = '?'+createSearchParams(searchParams);


        navigate({pathname: "/mercenaries",
        search: location.search});
        var result = await apiMercenaries();
        setMercenaries(await result.json());
        //console.log(await result.json());
    }

    const apiMercenaries = async () => {
        return fetch(apiGetUserUrl+location.search, {
            mode: 'cors',
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    }

    const pagerTopPosition = useRef(null);

    useEffect(() => {
        //fill the results with parameters from get
        const innerFuncAsync = async () => {
            var result = await apiMercenaries();
            setMercenaries(await result.json());
        }
        innerFuncAsync();
        if(pagerTopPosition?.current?.getBoundingClientRect().y < 0) pagerTopPosition?.current?.scrollIntoView({behaviour: "smooth"});
        //console.log(mercenaries);
    }, [page])

    

    return(
        <div className="mercenaries-wrapper soft-edges old-paper-background">
            <div className='mercenaries-search'>
                <h1>I'm looking for:</h1>
                <form className='mercenaries-search-form' onSubmit={handleSubmit}>

                    {/* this bar doesnt really has any function, but looks nice :) */}
                    <div className='mercenaries-searchbar-wrapper'>
                        <input className="search-input" type="text" placeholder='Enter name, specialty etc.'/>
                    </div>

                    <div className='column-wrapper'>
                        <div className='mercenaries-race-wrapper'>
                            <label htmlFor="race" className='mercenaries-race-label'>Race:</label>
                            <select name="race" className='mercenaries-race-input' value={race ? race : ""} onChange={e => setRace(e.target.value)}>
                            <option value ="">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 

                            
                        </div>
                        <div className='mercenaries-occupation-wrapper'>
                            <label htmlFor="occupation" className='mercenaries-occupation-label'>Occupation:</label>
                            <select name="race" className='mercenaries-race-input' value={occupation ? occupation : ""} onChange={e => setOccupation(e.target.value)}>
                            <option value ="">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 
                        </div>
                        <div className='mercenaries-experience-wrapper'>
                            <label htmlFor="experience" className='mercenaries-experience-label'>Experience:</label>
                            <select name="experience" className='mercenaries-experience-input' value={experience ? experience : ""} onChange={e => setExperience(e.target.value)}>
                            <option value ="">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 
                        </div>
                    </div>
                    <button type='submit' className="primary-btn mercenaries-search-btn">Search</button>
                </form>
            </div>

            

            {/*<div className='mercenaries-title soft-edges'><h1 className='soft-edges'>Mercenaries to hire:</h1></div>
            */}
            
            <div className='mercenaries-result-wrapper'>


                <p className='mercenaries-found'>Found: {mercenaries ? mercenaries?.userCount : 0} mercenaries.</p>
                <div ref={pagerTopPosition}></div>
                <Pager page={page} setPage={setPage} total={mercenaries?.userCount ? parseFloat(mercenaries?.userCount)/resultsPerPage : 1}/>


                {mercenaries ? (<>
                {mercenaries?.users?.map(x => <Mercenary name={x.userName} race={x.race} occupation={x.occupation} id={x.userName}/>)}
                </>) : (<p className='notfound-text'><i>Looks like no one's here...</i></p>)}


                <Pager page={page} setPage={setPage} total={mercenaries?.userCount ? parseFloat(mercenaries?.userCount)/resultsPerPage : 1}/>
                

                <div>
                    <p className='mercenaries-recently-viewed-caption'>Recently viewed:</p>
                    <div className='mercenaries-recently-viewed'>
                        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
                        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
                        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
                        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
                        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mercenaries;