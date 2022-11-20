import { style as css } from './style'
import { getGanttData } from '../../../store/gantt'
import { useSelector } from 'react-redux'
import { title_week } from '../../../utils/title_week'

export const days = []
const weeks = []
const entryDays = () => {
	for (let i = 1; i <= 31; i++) {
		days.push(i)
	}
}
const entryWeeks = () => {
	for (let i = 1; i <= days.length / 7; i++) {
		weeks.push(title_week(i))
	}
}
entryDays()
entryDays()
entryWeeks()

const Date_title = () => {
	const data = useSelector(getGanttData())
	const date1 = data.period.split('-')[0].split('.')
	const date2 = data.period.split('-')[1].split('.')
	const date_start = new Date([date1[1], date1[0], date1[2]].join('.'))
	const date_end = new Date([date2[1], date2[0], date2[2]].join('.'))
	let days_amount = Math.ceil(Math.abs(date_end.getTime() - date_start.getTime()) / (1000 * 3600 * 24))
	entryDays(days_amount)
	console.log(days_amount)
	return (
		<div style={css.title_frame}>
			<div style={css.title_table}>
				{weeks.map((el, i) => (
					<div style={css.title_weeks} key={i}>{el}</div>
				))}
			</div>
			<div style={css.title_table}>
				{days.map((el, i) => (
					<div style={css.title_days} key={i}>{el}</div>
				))}
			</div>
		</div>
	)
}
export default Date_title