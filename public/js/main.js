
const fetchApi = () => {
    const api = 'http://www.somaku.com/users/1'
    fetch(api)
        .then(response => response.json())
        .then(data => showApi(data))
        .catch(err => alert(`Error don happen ooo ${err}, abeg check network`))

}
fetchApi()

const showApi = (results) => {
    //destructuring results
    const {id, name, username, email, address, phone, website, company} = results
    const {street, suite, city, zipcode, geo} = address

    //getting all company p
    const companyDivs = document.querySelectorAll('.company p')
    //destructuring all comapny p
    const [companyName, companyCatchP, companyBs] = companyDivs

    //getting all user p
    const userDivs = document.querySelectorAll('.user p')
    //destructuring all user Divs
    const [one, two, three, four, five, six, seven] = userDivs

    //getting all spans
    const addressSpan = document.querySelectorAll('.user p span')
    //destructuring all spans
    const [spanOne, spanTwo, spanThree, spanFour, spanFive] = addressSpan

    companyName.textContent = company.name;
    companyCatchP.textContent = company.catchPhrase;
    companyBs.textContent = company.bs;
    
    
    one.textContent = id
    two.textContent = name
    three.textContent = username
    four.textContent = email
        spanOne.textContent = street
        spanTwo.textContent = suite
        spanThree.textContent = city
        spanFour.textContent = zipcode
        spanFive.textContent = `Longitude: ${geo.lng} Latitude: ${geo.lat}`
    six.textContent = phone
    seven.textContent = website
    // console.log(one)
}