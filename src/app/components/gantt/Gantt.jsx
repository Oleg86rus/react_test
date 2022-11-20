import Date_title from '../calendar/date_title/Date_title'
import { style } from './css'
import Date_table from '../calendar/data_table/Date_table'

const Gantt = () => {
	
	return (
		<div style={style.title}>
			<div style={style.frame}>
			  <Date_title/>
				<Date_table/>
			</div>
		</div>
	)
}

export default Gantt