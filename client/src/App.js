import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import './App.scss'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://meghan-bomberger-portfolio.herokuapp.com/api' : 'http://localhost:8080/api'

export default function App () {
  const [message, setMessage] = useState("")
  const [personalProjects, setPersonalProjects] = useState([])
  const [contributorProjects, setContributorProjects] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/projects`)
      .then(res => {
        if (res.data.projects) {
          setPersonalProjects(res.data.projects.filter(project => !project.contributor))
          setContributorProjects(res.data.projects.filter(project => project.contributor))
        }
      })
      .catch(err => {
        console.error(err)
        setMessage("ERROR")
      })
    
    axios.get(`${baseURL}/skills`)
      .then(res => {
        if (res.data.skills) {
          setSkills(res.data.skills)
        }
      })
      .catch(err => {
        console.error(err)
        setMessage("ERROR")
      })
  }, [])

  return (
    <>
      <div className="app-background"/>
      <div className="app">
        <Element name="hero" className="element">
          <Hero/>
        </Element>
        
        <Nav/>
        
        {personalProjects.length > 0 && (
          <Element name="personalProjects" className="element">
            <Projects projects={personalProjects}/>
          </Element>
        )}

        {contributorProjects.length > 0 && (
          <Element name="contributorProjects" className="element">
            <Projects projects={contributorProjects}/>
          </Element>
        )}

        {skills.length > 0 && (
          <Element name="skills" className="element">
            <Skills skills={skills}/>
          </Element>
        )}

        <Element name="contact" className="element">
          <Footer/>
        </Element>
      </div>
    </>
  )
}
