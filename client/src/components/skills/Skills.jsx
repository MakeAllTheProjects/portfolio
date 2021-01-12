import React, { useContext } from 'react'
import { SkillsContext } from '../../App'
import './Skills.scss'

export default function Skills () {
	const skills = useContext(SkillsContext)

	return (
		<section className="section skills">
			<h2>Skills</h2>
		</section>
	)
}
