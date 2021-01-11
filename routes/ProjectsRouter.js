const express = require('express')
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE)

const projectsRouter = express.Router()

projectsRouter.get('/', async (req, res, next) => {
	try {
		await base('projects').select({
			view: "Grid view"
		}).eachPage(function page(records, fetchNextPage) {
			const projects = records.map(record => {
				return {
					id: record.id,
					project_name: record.fields.project_name,
					skills: record.fields.skills,
					desktop_img: record.fields.desktop_img[0].thumbnails.full.url,
					mobile_img: record.fields.mobile_img[0].thumbnails.full.url,
					description: record.fields.description,
					url: record.fields.url,
					repo: record.fields.repo,
					contributor: record.fields.contributor
				}
			})

			res.send({
				success: true,
				projects: projects
			})
		}, function done(err) {
			if (err) {
				console.error(err)
				return
			}
		})
	} catch (err) {
		if (err) {
			console.error(err)
		}
		res.send({
			success: false
		})
	}
})

module.exports = projectsRouter
