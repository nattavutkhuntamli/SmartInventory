
let id = 0;
let r = (Math.random() + 1).toString(36).substring(7);
let a = Math.floor(Math.random() * 31) + 50
const  data = [
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a},
    {id:id++,name:r,age:a}
]
const homepages = (req, res) => {
    res.render('pages/frontend/index',{
        title:"Home Pages",
        data:data
    })
}

const aboutpages = (req, res) => {
    res.render('pages/frontend/about',{
        title:"Home Pages"
    })
}

const registerpages = (req, res) => {
    res.render('pages/frontend/register',{
        title:"Home Pages"
    })
}

const loginpages = (req, res) => {
    res.render('pages/frontend/login',{
        title:"Home Pages"
    })
}


module.exports = {
    homepages,
    aboutpages,
    registerpages,
    loginpages
}