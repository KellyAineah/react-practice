import React, { useState } from 'react';
import './Section.css'


function ToggleSection ({text}){

    const cars=['prado', 'bima', 'audi']
    const towns=['nairobi', 'ny', 'berlin']
    const countries=['kenya', 'germany', 'usa']

    const [carSection, setCarSection] = useState(false)
    const [townSection, setTownSection]= useState(false)
    const [countriesSection, setCountriesSection]= useState(false)
    

    const renderCars=cars.map((car)=>{
        //console.log(car)
        return <li key={car}>{car}</li>
    })
    const renderTowns=towns.map((town)=> {
        //console.log(town)
        return <li key={town}>{town}</li>
    })
    const renderCountries= countries.map((country)=>{
        //console.log(country)
        return <li key={country} onClick={(e)=> console.log(e)}>Country: {country}</li>
    })

    function handleCar(){
        setCarSection(prevCarSection => !prevCarSection)
    }
    function handleCountry(){
        setCountriesSection(prevCountrySection => !prevCountrySection)
    }
    const handleTown = () => {
         setTownSection(prevTownSection => !prevTownSection)
    }
    return(
        <>
        <h1>Toggle Section - {text}</h1>
        <div className='all-buttons'>
            <button className='btn-country active'
            onClick={handleCar} >
            
            {carSection ? 'hide cars': 'show cars'}</button>
           {carSection && <ul>{renderCars}</ul>}
        </div>
        <div>
            <button className='btn-country'
            onClick={handleCountry} >
            
            {countriesSection ? 'hide countries': 'show countries'}</button>
           {countriesSection && <ol>{renderCountries}</ol>}
        </div>
        <div>
            <button className='btn-country'
            onClick={handleTown} >
            
            {townSection ? 'hide Towns': 'show Towns'}</button>
           {townSection && <ol>{renderTowns}</ol>}
        </div>


        </>
    )
}
export default ToggleSection;