import { style as css } from './style'
import { getGanttData } from '../../../store/gantt'
import { useSelector } from 'react-redux'
import { title_week } from '../../../utils/title_week'

export const days = ['1', '2']
const weeks = []

function addDays(date) {
	let result = new Date(date);
	result.setDate(result.getDate() + 1);
	return result;
}

function arrays_of_day(start, end) {
	let first_day = start.setDate(start.getDate())
	let last_day = start.setDate(start.getDate() + end)
	while (first_day < last_day) {
		const day = addDays(first_day).getDate()
		days.push(day)
		first_day = addDays(first_day)
	}
}

const Date_title = () => {
	const data = useSelector(getGanttData())
	const data_first_day = data.period.split('-')[0].split('.')
	const data_last_day = data.period.split('-')[1].split('.')
	const start_date = new Date([data_first_day[1], data_first_day[0], data_first_day[2]].join('.'))
	const end_date = new Date([data_last_day[1], data_last_day[0], data_last_day[2]].join('.'))
	const month_start = new Date([data_first_day[1], data_first_day[0], data_first_day[2]].join('.')).getMonth()
	const days_amount = Math.ceil(Math.abs(end_date.getTime() - start_date.getTime()) / (1000 * 3600 * 24))
	
	for (let i = 1; i <= days.length / 7; i++) {
		weeks.push(title_week(i, month_start))
	}
	arrays_of_day(start_date, days_amount)
	
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