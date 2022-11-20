import PropTypes from 'prop-types'
import arrow from '../../../images/work_item_frames/arrow.svg'
import { style } from './style'
import { current_img } from '../../../utils/current_img'
import tasks_margin from '../../../utils/tasks_margin'
import { current_chart_color } from '../../../utils/current_chart_color'
import { collapse_heading } from '../../../utils/collaps'

const Work_item_frame = ({ props, length, img, children, data }) => {
	const date1 = new Date(props.period_start);
	const date2 = new Date(props.period_end);
	const chartStyle = {
		height: '24px',
		borderRadius: '4px',
		...current_chart_color(img)
	}
	const day_chart_start = () => {
		const day = date1.getDate() - 1
		return day * 20 + 389 + 'px'
	}
	const parent_chart = {
		position: 'absolute',
		width: '100%',
		height: '40px',
		left: 0,
		marginLeft: day_chart_start(),
		display: 'flex',
		gap: '8px',
		alignItems: 'center',
		zIndex: 100000
	}
	let daysLag = () => props.period_start == props.period_end
		? {
		width: '20px',
			...chartStyle
	}
		: {
		width: 20 * Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 20 + 'px',
			...chartStyle
	};

  return (
		<div data-type='hide'>
		<div style={style.frame} data-type={data} onClick={(e) => collapse_heading(e)}>
			<img src={arrow} alt="arrow" style={tasks_margin(img)} />
			<img src={current_img(img)} alt="issue_icon" style={style.issue}/>
			<div style={style.amount}>{length}</div>
			<div style={style.title}>{props.title}</div>
			<div style={parent_chart}>
				<div className='chart' style={daysLag()}></div>
				<p>{props.title}</p>
			</div>
		</div>
			{children}
		</div>
  )
}

Work_item_frame.propTypes = {
	props: PropTypes.object
}

export default Work_item_frame