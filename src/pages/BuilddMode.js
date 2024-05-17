import React, {useEffect, useState} from 'react'
import '../BuilddMode.css'
import {Link} from 'react-router-dom'

import MainHeader from "../components/MainHeader";

import project_cards from "../content/buildd_cards/projects.js";
import person_cards from "../content/buildd_cards/persons.js";

const BuilddMode = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filter, setFilter] = useState('Project');
  const [builddCards, setBuilddCards] = useState(project_cards);

  useEffect(() => {
    let buildd_cards = [];
    if (filter=="Project")
    {
      buildd_cards = project_cards;
    }
    else if (filter=="Person")
    {
      buildd_cards = person_cards;     
    }
    let filterKeywords = [searchTerm, "open"]
    const filteredProjects = buildd_cards.filter(card =>
      filterKeywords.some(keyword => card.keywords.includes(keyword))
    );
    console.log(filteredProjects);
    setBuilddCards(filteredProjects);
  }, [filter, searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <>
      <MainHeader mode="buildd"/>
    
      <div className="build-container">
          <div className='search-box'>
              <div className='search-chooser'>
                  <button className={filter=="Person"?"on":""} onClick={() => setFilter("Person")}>Person</button>
                  <button className={filter=="Project"?"on":""} onClick={() => setFilter("Project")}>Project</button>
              </div>
              <input type="text" placeholder='Search here...' value={searchTerm} onChange={handleChange}/>
              <></>
          </div>

          <div className='buildd-box-outliner'>
            <div className='buildd-box'>
              {builddCards && builddCards.map((card, index) => (
                <Link to="/">
                  <div className='buildd-card' key={index}>
                    <div className="front" key={index}>
                      <img src={card.img_path} />
                      <h1>{card.title}</h1>
                      <p>{card.tagline}</p>
                    </div>
                    {/* <div className="back" key={index}>
                      <p>{card.back_content}</p>
                    </div> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
      </div>
    </>
  )
}

export default BuilddMode;
