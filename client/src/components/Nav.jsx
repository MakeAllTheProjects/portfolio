import React from 'react'
import { Link } from '@reach/router'
import './Nav.scss'
import homeIcon from '../assets/005-house.svg'
import projectsIcon from '../assets/008-web-programming.svg'
import skillsIcon from '../assets/002-pencil.svg'
import contactIcon from '../assets/003-call.svg'
import aboutIcon from '../assets/004-user.svg'
import resumeIcon from '../assets/009-pdf.svg'

const navLinks = [
	{
		title: "top",
		icon: homeIcon,
		path: "#home"
	},
	{
		title: "projects",
		icon: projectsIcon,
		path: "#projects"
	},
	{
		title: "skills",
		icon: skillsIcon,
		path: "#skills"
	},
	{
		title: "contact me",
		icon: contactIcon,
		path: "#contact"
	},
	{
		title: "about me",
		icon: aboutIcon,
		path: "#about"
	},
	{
		title: "download my resume",
		icon: resumeIcon,
		path: "#resume"
	}
]

export default function Nav () {
	return (
		<nav className="nav">
			{navLinks.map(navLink => (
				<a
					className="nav-link"
					key={navLink.path}	
					href={`#${navLink.path}`}
				>
					<img
						alt={navLink.title}
						title={navLink.title}
						src={navLink.icon}
					/>
				</a>
			))}
		</nav>
	)
}