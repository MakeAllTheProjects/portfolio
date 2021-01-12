import React from 'react'
import './ProjectCard.scss'

export default function ProjectCard ({project}) {
	return (
		<article className="project-card">
			<a href={project.url}>
				<div className="project-example">
					<div className="project-examples">
						<div className="desktop-example">
							<div className="desktop-screen" style={{ backgroundImage: `url(${project.desktop_img})` }} />
							<div className="desktop-screen-stand" />
							<div className="desktop-screen-base" />
						</div>
						<div className="mobile-example">
							<div className="phone-camera" />
							<div className="phone-screen" style={{ backgroundImage: `url(${project.mobile_img})` }} />
							<div className="phone-button" />
						</div>
					</div>
				</div>
			</a>
			<div className="project-info">
				<h3>{project.title}</h3>
			</div>

		</article>
	)
}