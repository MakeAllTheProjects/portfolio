import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.scss'
import Hero from './components/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://meghan-bomberger-portfolio.herokuapp.com/api' : 'http://localhost:8080/api'

export const ProjectsContext = React.createContext()
export const SkillsContext = React.createContext()

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
        {/* <ProjectsContext.Provider value={{personalProjects, contributorProjects}}>
          <Projects/>
        </ProjectsContext.Provider> */}
        {/* <SkillsContext.Provider value={{skills}}>
          <Skills/>
        </SkillsContext.Provider> */}
      </div>
    </>
  )
}
