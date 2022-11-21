export const collapse_heading = (e) => {
	let el
	const change_opacity = (element) => {
			element.forEach((e) => {
				if (e.closest('[data-type="hide"]').hidden === false) {
					e.closest('[data-type="hide"]').hidden = true
				} else {
					e.closest('[data-type="hide"]').hidden = false
				}
			})
	}
	switch (e.target.dataset.type) {
		case '1':
			el = document.querySelectorAll('[data-type="2"]')
			change_opacity(el)
			break
		case '2':
			el = document.querySelectorAll('[data-type="3"]')
			change_opacity(el)
			break
		case '3':
			el = document.querySelectorAll('[data-type="4"]')
			change_opacity(el)
			break
		case '4':
			el = document.querySelectorAll('[data-type="5"]')
			change_opacity(el)
			break
	}
}