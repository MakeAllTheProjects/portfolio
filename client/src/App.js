import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.scss'

export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://bracelet-designer.herokuapp.com/api' : 'http://localhost:8080/api'

export default function App () {
  const [message, setMessage] = useState("")
  const [personalProjects, setPersonalProjects] = useState([])
  const [contributorProjects, setContributorProjects] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/projects`)
      .then(res => {
        setPersonalProjects(res.data.projects.filter(project => !project.contributor))
        setContributorProjects(res.data.projects.filter(project => project.contributor))
      })
      .catch(err => {
        console.error(err)
        setMessage("ERROR")
      })
  }, [])

  useEffect(() => {
  }, [personalProjects, contributorProjects])

  return (
    <div className="app">
      <h1>Welcome to your portfolio</h1>
      
      {message && <p style={{backgroundColor: "red"}}>{message}</p>}
      
      {personalProjects.length > 0 && <h2>Personal Projects</h2>}
      <ul>
        {personalProjects.map(project => <li key={project.id}>{project.project_name}</li>)}
      </ul>
      
      {contributorProjects.length > 0 && <h2>Contributor Projects</h2>}
      <ul>
        {contributorProjects.map(project => <li key={project.id}>{project.project_name}</li>)}
      </ul>
    </div>
  )
}
