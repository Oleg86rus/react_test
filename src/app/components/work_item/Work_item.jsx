import Work_item_frame from './work_item_frame/Work_item_frame'
import { gantt_data } from '../../util'
import { style } from './css'

const Work_item = () => {
	const title = 'Work item'
	const arr = new Array(gantt_data.chart)
	const secondlvl = arr[0].sub
	const thirdlvl = secondlvl[0].sub
	const fourthlvl = thirdlvl[0].sub
	const fifthlvl = fourthlvl[0].sub
	
	return (
		<div style={style.work_item}>
			<div style={style.title}><p style={style.title_p}>
				{title}</p>
			</div>
			<div style={style.frame}></div>
			{arr && (
				<>
				{arr.map((el, i) => <Work_item_frame key={el.id} img='1' length={secondlvl.length} props={el}/>)}
				{secondlvl.map((el) => <Work_item_frame key={el.id} img='2' length={thirdlvl.length} props={el}/>)}
				{thirdlvl.map((el) => <Work_item_frame key={el.id} img='3' length={fourthlvl.length} props={el}/>)}
				{fourthlvl.map((el) => <Work_item_frame key={el.id} img='4' length={fifthlvl.length} props={el}/>)}
				{fifthlvl.map((el) => <Work_item_frame key={el.id} img='5' length={fifthlvl[0].sub ? fifthlvl[0].sub.length : 0} props={el}/>)}
				</>
			)}
		</div>
	)
}

export default Work_item;