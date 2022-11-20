import PropTypes from 'prop-types'
import arrow from '../../images/work_item_frames/arrow.svg'
import first_issue from "../../images/work_item_frames/first_level.png"
import second_issue from "../../images/work_item_frames/second_level.png"
import third_issue from "../../images/work_item_frames/third_level.png"
import fourth_issue from "../../images/work_item_frames/fourth_level.png"
import fifth_issue from "../../images/work_item_frames/fifth_level.png"

const Work_item_frame = ({ props, length, img }) => {
	const style = {
		frame: {
			display: 'flex',
			alignItems: 'center',
			width: 'auto',
			height: '40px',
			background: '#FFFFFF',
			borderWidth: '0px 0px 1px 0px'
		},
		amount: {
			fontFamily: 'Roboto',
			fontStyle: 'italic',
			fontWeight: '100',
			fontSize: '12px',
			lineHeight: '16px',
			color: '#8B8C9E',
			marginLeft: '4px'
		},
		arrow: {
			marginLeft: frameMargin()
		},
		issue: {
			marginLeft: '4px'
		},
		title: {
			marginLeft: '8px',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '18px',
			color: '#262842'
		}
	}
	function frameMargin() {
		switch (img) {
			case '1':
				return '20px';
			case '2':
				return '40px';
			case '3':
				return '60px';
			case '4':
				return '80px';
			case '5':
				return '100px';
		}
	}
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
			<img src={arrow} alt="arrow" style={style.arrow} />
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