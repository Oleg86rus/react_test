import { useDispatch, useSelector } from 'react-redux'
import { getGanttLoadingStatus, loadGanttData } from '../store/gantt'
import { useEffect } from 'react'

const AppLoader = ({children}) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getGanttLoadingStatus());
	useEffect(() => {
		dispatch(loadGanttData());
	}, []);
	if (isLoading) return <h1>LOADING ...</h1>
	return children
}

export default AppLoader;