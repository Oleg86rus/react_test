import React from 'react'
import { gantt_data } from '../../utils/gantt_data'
import Work_item from '../work_item/Work_item'
import { style } from './style'
import Gantt from '../gantt/Gantt'
import btn_arrow from '../../images/btn_arrow.svg'

const Main_page = () => {

	return (
		<>
		<div className='accordion' style={style.frame}>
			<div style={style.title}>
			<h1 style={style.title_style}>{gantt_data.project} / {gantt_data.period}</h1>
			<button style={style.button}>
				<img src={btn_arrow} alt="arrow"/>
				<p>Export</p>
			</button>
			</div>
			<div style={style.table}>
				<Work_item/>
				<Gantt/>
			</div>
		</div>
		</>
)
}

export default Main_page