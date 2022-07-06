import {React, useState} from 'react';
import './Mercenaries.scss'
import Mercenary from '../../components/Mercenary/Mercenary'

function Mercenaries() {
    const [race, setRace] = useState();
    const [occupation, setOccupation] = useState();
    const [experience, setExperience] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("race: "+race);
        console.log("occ: "+occupation);
        console.log("exp: "+experience);
    }

    return(
        <div className="mercenaries-wrapper soft-edges old-paper-background">
            <div className='mercenaries-search'>
                <h1>I'm looking for:</h1>
                <form className='mercenaries-search-form' onSubmit={handleSubmit}>
                    <div className='column-wrapper'>
                        <div className='mercenaries-race-wrapper'>
                            <label htmlFor="race" className='mercenaries-race-label'>Race:</label>
                            <select name="race" className='mercenaries-race-input' onChange={e => setRace(e.target.value)}>
                            <option value ="any">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 

                            
                        </div>
                        <div className='mercenaries-occupation-wrapper'>
                            <label htmlFor="occupation" className='mercenaries-occupation-label'>Occupation:</label>
                            <select name="race" className='mercenaries-race-input' onChange={e => setOccupation(e.target.value)}>
                            <option value ="any">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 
                        </div>
                        <div className='mercenaries-experience-wrapper'>
                            <label htmlFor="experience" className='mercenaries-experience-label'>Race:</label>
                            <select name="race" className='mercenaries-race-input' onChange={e => setExperience(e.target.value)}>
                            <option value ="any">Any</option>
                            <option value ="guava">Guava</option>
                            <option value ="lychee">Lychee</option>
                            <option value ="papaya">Papaya</option>
                            </select> 
                        </div>
                    </div>
                    <button type='submit' className="primary-btn mercenaries-search-btn">Search</button>
                </form>
            </div>

            

            <div className='mercenaries-title soft-edges'><h1 className='soft-edges'>Mercenaries to hire:</h1></div>
            <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf dfg dfg dfg dfgdfg dfgdfg dfgdfgdfgd' race='Human' occupation='Mage' id='1'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage' id='2'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>
        <Mercenary name='Gandalf' race='Human' occupation='Mage'/>

        </div>
    )
}

export default Mercenaries;