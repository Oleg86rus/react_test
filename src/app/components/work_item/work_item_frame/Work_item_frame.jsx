import PropTypes from 'prop-types'
import arrow from '../../../images/work_item_frames/arrow.svg'
import first_issue from "../../../images/work_item_frames/first_level.png"
import second_issue from "../../../images/work_item_frames/second_level.png"
import third_issue from "../../../images/work_item_frames/third_level.png"
import fourth_issue from "../../../images/work_item_frames/fourth_level.png"
import fifth_issue from "../../../images/work_item_frames/fifth_level.png"
import { style } from './css'

export function frameMargin(i) {
	switch (i) {
		case '1':
			return { marginLeft: '20px' };
		case '2':
			return { marginLeft: '40px' };
		case '3':
			return { marginLeft: '60px' };
		case '4':
			return { marginLeft: '80px' };
		case '5':
			return { marginLeft: '100px' };
	}
}

const Work_item_frame = ({ props, length, img }) => {
	
	const current_img = () => {
		if (img) {
			switch (img) {
				case '1':
					return first_issue;
				case '2':
					return second_issue;
				case '3':
					return third_issue;
				case '4':
					return fourth_issue;
				case '5':
					return fifth_issue;
			}
		}
	}

  return (
		<div style={style.frame}>
			<img src={arrow} alt="arrow" style={frameMargin(img)} />
			<img src={current_img()} alt="issue_icon" style={style.issue}/>
			<div style={style.amount}>{length}</div>
			<div style={style.title}>{props.title}</div>
		</div>
  )
}

Work_item_frame.propTypes = {
	props: PropTypes.object
}

export default Work_item_frame