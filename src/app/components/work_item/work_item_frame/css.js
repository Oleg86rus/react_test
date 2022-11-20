import { frameMargin } from './Work_item_frame'

export const style = {
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