import first_issue from '../images/work_item_frames/first_level.png'
import second_issue from '../images/work_item_frames/second_level.png'
import third_issue from '../images/work_item_frames/third_level.png'
import fourth_issue from '../images/work_item_frames/fourth_level.png'
import fifth_issue from '../images/work_item_frames/fifth_level.png'

export const current_img = (img) => {
	if (img) {
		switch (img) {
			case '1':
				return first_issue
			case '2':
				return second_issue
			case '3':
				return third_issue
			case '4':
				return fourth_issue
			case '5':
				return fifth_issue
		}
	}
}