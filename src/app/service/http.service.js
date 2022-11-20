import axios from 'axios'
import configFile from '../config.json'
//ни fetch ни axios не работают
//fetch("http://82.202.204.94/tmp/test.php", {mode:'no-cors'})
const http = axios.create({
	baseURL: configFile.apiEndPoint,
})

http.interceptors.request.use(
	async function (config) {
		config.headers = {
			...config.headers,
		}
		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)
axios.interceptors.response.use(
	(res) => {
		res.data = { content: res.data }
		return res
	},
	function (error) {
		const expectedErrors = error.response &&
			error.response.status >= 400 &&
			error.response.status < 500
		if (!expectedErrors) {
			console.log('Something was wrong. Try it later',
				error)
		}
		return Promise.reject(error)
	},
)

const httpService = {
	get: axios.get,
}
export default httpService