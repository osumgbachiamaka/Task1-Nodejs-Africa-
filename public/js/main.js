
const fetchApi = () => {
    const api = 'https://jsonplaceholder.typicode.com/posts'
    fetch(api)
        .then(response => response.json())
        .then(data => showApi(data))
        .catch(err => alert(`Error don happen ooo ${err}, abeg check network`))

}
fetchApi()

const showApi = (results) => {
    const table = document.querySelector('.profile table tbody')

    results.forEach((user) => {
        const {userId, id, title, body} = user 
        let tableRow = `
            <tr>
            <td class="pa3 bb b--black-10">
                ${userId}
            </td>
            <td class="pa3 bb b--black-10">
                ${id}
            </td>
            <td class="pa3 bb b--black-10">
                ${title}
            </td>
            <td class="pa3 bb b--black-10">
                ${body}
            </td>
            </tr>
        `
        table.insertAdjacentHTML("beforeend", tableRow)
        console.log(userId, id, title)
    })
}