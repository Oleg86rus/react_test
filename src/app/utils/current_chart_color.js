export const current_chart_color = (i) => {
	if (i) {
		switch (i) {
			case '1':
				return {background: '#E2EBFF', border: '1px solid #497CF6'};
			case '2':
				return {background: '#FFF2E0', border: '1px solid #FFA530'};
			case '3':
				return {background: '#CFF0D6', border: '1px solid #2DB77B'};
			case '4':
				return {background: '#CFF0D6', border: '1px solid #2DB77B'};
			case '5':
				return {background: '#FFF2E0', border: '1px solid #FFA530'};
		}
	}
}