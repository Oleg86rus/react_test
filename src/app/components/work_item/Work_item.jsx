import Work_item_frame from './work_item_frame/Work_item_frame'
import { style } from './style'
import { getGanttData } from '../../store/gantt'
import { useSelector } from 'react-redux'

const Work_item = () => {
	const title = 'Work item'
	const data = useSelector(getGanttData())
	const second_lvl = data.chart.sub[0]
	const third_lvl = second_lvl.sub[0]
	const fourth_lvl = third_lvl.sub[0]
	const fifth_lvl = fourth_lvl.sub
	
	return (
		<div style={style.work_item}>
			<div style={style.title}><p style={style.title_p}>
				{title}</p>
			</div>
			<div style={style.frame}></div>
			{data && (
				<>
					<Work_item_frame img='1' data='1' length='1' props={data.chart}>
						<Work_item_frame img="2" data="2" length="1" props={second_lvl}>
							<Work_item_frame img="3" data="3" length="1" props={third_lvl}>
								<Work_item_frame img="4" data="4" length="2" props={fourth_lvl}>
									{fifth_lvl.map((el) => <Work_item_frame
										key={el.id}
										data="5"
									  img="5"
										length={
										el.sub
											? el.sub.length
											: 0} props={el}
									/>)}
								</Work_item_frame>
							</Work_item_frame>
						</Work_item_frame>
					</Work_item_frame>
				</>
			)}
		</div>
	)
}

export default Work_item;