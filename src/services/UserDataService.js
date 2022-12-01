export default class UserDataService {
    static getData() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
    }
}