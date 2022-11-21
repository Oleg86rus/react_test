const month = [
	'Jan',
	'Feb',
	'March',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Des'
]
export const title_week = (i, month_start) => {
	// console.log(i)
	// console.log(month_start)
	switch (i) {
		case 1:
			return `01 ${month[month_start]} - 07 ${month[month_start]}`
		case 2:
			return `08 ${month[month_start]} - 14 ${month[month_start]}`
		case 3:
			return `15 ${month[month_start]} - 21 ${month[month_start]}`
		case 4:
			return `22 ${month[month_start]} - 28 ${month[month_start]}`
		case 5:
			return `29 ${month[month_start]} - 4 ${month[month_start + 1]}`
		case 6:
			return `5 ${month[month_start + 1]} - 11 ${month[month_start + 1]}`
		case 7:
			return `12 ${month[month_start + 1]} - 18 ${month[month_start + 1]}`
	}
}