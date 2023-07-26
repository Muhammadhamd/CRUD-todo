import express from "express"
import { nanoid } from 'nanoid'
const Router = express.Router()
// not recommended at all - server should be stateless
let posts = [
    {
        id: nanoid(),
        text: "some post text"
    }
]

Router.post("/post",(req ,res)=>{
    // console.log('this is signup!', new Date());

    if (
         !req.body.text
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
        return;
    }

    posts.unshift({
        id: nanoid(),
        text: req.body.text,
    })

    res.send('post created');

})

Router.get('/posts', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send(posts);
})


export default Router