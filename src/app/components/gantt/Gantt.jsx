import Date_title from '../calendar/date_title/Date_title'
import { style } from './css'

const Gantt = () => {
	
	return (
		<div style={style.parent}>
			<div style={style.frame}>
			 <Date_title/>
			</div>
		
		</div>
	)
}

export default Gantt