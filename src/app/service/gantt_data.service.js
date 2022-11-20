import httpService from './http.service'
const ganttService = {
	get: async () => {
		// если запрашиваю данные со своего запущенного сервера - все работает.
		// если прописываю "http://82.202.204.94/tmp/test.php" - cors всё ломает.
		const { data } = await httpService.get('')
		console.log(data)
		return data;
	}
}
export default ganttService;