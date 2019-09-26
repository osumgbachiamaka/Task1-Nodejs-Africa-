const PORT =        process.env.PORT || 3000,
    express =       require('express'),
    bodyParser =    require('body-parser'),
    fetch =         require('node-fetch'),
    LocalStorage =  require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
   
const router =           express();

const fetchApi = () => {
    const api = 'https://jsonplaceholder.typicode.com/posts'
    fetch(api)
        .then(response => response.json())
        .then((data) => {showApi(data)})
        .catch(err => console.log(`Error don happen ooo ${err}, abeg check network`))
    
}
// fetchApi()
let retreivedData;


const saveToLocal = () => {
    localStorage.setItem('apiPosts', JSON.stringify(retreivedData))  
}
const retrieveFromLocal = () => {
    //checking if retrieved data aleady exist
    if(localStorage.getItem('apiPosts') !== null){
        retreivedData = JSON.parse(localStorage.getItem('apiPosts'))
        return true
    }
    else{
        fetchApi()
        return false
    }
    
// console.log(retreivedData)
    if(!retreivedData == 'undefined' ){
        console.log('yeah yeah yeah')
        return
    }
    else{
        console.log('none')
        fetchApi()
    }
}


const showApi = (result) =>{
    retreivedData = result
    // console.log(retreivedData)
    saveToLocal()
    // return result;
}

const pushIntoArray = (id, result) => {
    retrieveFromLocal()
    // const data = retreivedData.filter(post => post.id == id)
    // const [d] = data
    for (let i = 0; i < retreivedData.length; i++) {
        if(retreivedData[i].id == id){  //look for match with id
            retreivedData[i].comment = result.comment //add comment
            console.log(retreivedData[i]) 
            localStorage.setItem('apiPosts', JSON.stringify(retreivedData))
            break;  //exit loop since you found the post
        }
     }
    // d.comment = result.comment
    // console.log(data)
    // console.log(d)
    // localStorage.setItem('apiPosts', JSON.stringify(d))
}

const findId = (userid, id) => {
    retrieveFromLocal()
    const data = retreivedData.filter(post => post.id == id)
    // console.log(id)
    // console.log(data)
    return data  
}


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/posts', (req, res) => {
    if (retrieveFromLocal()){
        const allPosts = retreivedData
    // console.log(allPosts)
    res.render('posts', {allPosts: allPosts})
    }
})

router.get('/post-:userid-:id', (req, res) => {
    const userid = req.params.userid,
        id = req.params.id;
        // console.log(id)
        [returnedPost] = findId(userid, id)
        // console.log(returnedPost)
    res.render('showPost',{returnedPost : returnedPost})
})

//route for comments
router.post('/post/:id', (req, res) => {
    const id = req.params.id
    pushIntoArray(id, req.body)
    res.redirect('/posts')
})

module.exports = router