import { days } from '../date_title/Date_title'
import { style } from './style.js'

const Date_table = () => {

	return (
		<div style={style.table}>
			{days.map((el, i)=> (
				<div key={i} style={style.frame}></div>
			))}
		</div>
	)
}
export default Date_table