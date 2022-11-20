import React from 'react'
import { gantt_data } from '../util'
import Work_item from './work_item/Work_item'
import Gantt from '../store/gantt'

const Main_page = () => {
	const style = {
		title_style : {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '24px',
			lineHeight: '28px',
			marginBottom: '18px'
		},
		table: {
			display: 'flex'
		},
		frame: {
			width: '1440px',
			height: '800px',
			background: '#FFFFFF',
			boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
			padding: '22px 27px 24px 24px',
			marginTop: '100px',
			overflow: 'hidden'
		}
	}
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