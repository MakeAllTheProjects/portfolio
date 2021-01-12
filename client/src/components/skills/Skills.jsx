import React, { useContext } from 'react'
import { SkillsContext } from '../../App'

export default function Skills () {
	const skills = useContext(SkillsContext)

	return (
		<section className="section">
			<h2>Skills</h2>
		</section>
	)
}
