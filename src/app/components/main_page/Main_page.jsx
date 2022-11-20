import React from 'react'
import { gantt_data } from '../../util'
import Work_item from '../work_item/Work_item'
import { style } from './css'
import Gantt from '../gantt/Gantt'


const Main_page = () => {

	return (
		<>
		<div style={style.frame}>
			<h1 style={style.title_style}>{gantt_data.project} / {gantt_data.period}</h1>
			<div style={style.table}>
				<Work_item/>
				<Gantt/>
			</div>
		</div>
		</>
)
}

export default Main_page