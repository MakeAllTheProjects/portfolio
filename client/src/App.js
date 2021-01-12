import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.scss'
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
  }, [])

  return (
    <>
      <div className="app-background"/>
      <div className="app">
        <Hero/>
        <Nav/>
        {personalProjects.length > 0 && <Projects projects={personalProjects}/>}
        {contributorProjects.length > 0 && <Projects projects={contributorProjects}/>}
        {skills.length > 0 && <Skills skills={skills}/>}
      </div>
    </>
  )
}
