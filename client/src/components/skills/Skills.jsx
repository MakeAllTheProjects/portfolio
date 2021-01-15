import React from 'react'
import './Skills.scss'
import SkillsList from './SkillsList'

export default function Skills ({skills}) {
	return (
		<section className="section skills">
			<h2>Skills</h2>
			<SkillsList
				title="Languages"
				skills={skills.filter(skill => skill.category === "language")}
			/>
			<SkillsList
				title="Libraries and Frameworks"
				skills={skills.filter(skill => skill.category === "library or framework")}
			/>
			<SkillsList
				title="Hosting Services"
				skills={skills.filter(skill => skill.category === "hosting service")}
			/>
			<SkillsList
				title="Softwares and Services"
				skills={skills.filter(skill => skill.category === "software or service")}
			/>
			<SkillsList
				title="eCommerce Platforms"
				skills={skills.filter(skill => skill.category === "eCommerce platform")}
			/>
			<SkillsList
				title="OS"
				skills={skills.filter(skill => skill.category === "OS")}
			/>
			<SkillsList
				title="Additional Skills"
				skills={skills.filter(skill => skill.category === "other")}
				invert
			/>
		</section>
	)
}
