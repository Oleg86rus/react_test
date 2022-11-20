import { days, gantt_data, weeks } from '../../../../util'
import { style as css } from './css'
const startDate = gantt_data.period.split('-')[0].split('.')
export const days = []
const weeks = []
const entryDays = () => {
	for (let i = 1; i <= 31; i++) {
		days.push(i)
	}
}
const entryWeeks = () => {
	for (let i = 1; i <= days.length / 7; i++) {
		weeks.push(i)
	}
}
entryDays()
entryDays()
entryWeeks()

const Date_title = () => {
	return (
		<div style={css.title_frame}>
			<div style={css.title_table}>
				{weeks.map(el => (
					<div style={css.title_weeks}>{el}</div>
				))}
			</div>
			<div style={css.title_table}>
				{days.map(el => (
					<div style={css.title_days}>{el}</div>
				))}
			</div>
		</div>
	)
}
export default Date_title