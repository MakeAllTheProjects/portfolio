import React, { useContext } from 'react'
import { ProjectsContext } from '../../App'

export default function Projects () {
	const projects = useContext(ProjectsContext)
	const { personalProjects, contributorProjects } = projects
	
	return (
		<section className="section">
			<h2>Projects</h2>
		</section>
	)
}
