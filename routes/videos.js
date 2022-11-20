const express = require('express');
const fs = require('fs');
//for posting ID- get back to it later
const { v4: uuidv4 } = require('uuid');
const app = express();
const router = express.Router();
app.use(express.json());


// const 
//A unique id must be generated for each video added.

// const convertFile = () => {

// }

const getVideos = () => {
    return JSON.parse(fs.readFileSync("data/videos.json"));
}

//the dash itself is /videos, anything more
//getting your videos
router.get('/', (req, res) => {
    res.status(200).json(getVideos());
})



//using the params 
router.get('/:id', (req, res) => {
    let specificVideo = getVideos();
    // console.log("post.id is...",typeof post.id);
    // res.send("video id is...", typeof post.id );
    // console.log("req.params.id is...",typeof req.params.id);
    // why is it 2 equal signs instead of 3?
    const matchingVideo = specificVideo.find(post => req.params.id == post.id)
    res.status(200).json(matchingVideo);
})



router.post('/', (req, res) => {
    console.log(req.body);

    const title = req.body.title;
    // console.log(title);
    const description = req.body.description;
    // console.log(description);

    let newPostVideo = {
        id: uuidv4(),
        title: title,
        channel: "TBD",
        image: "http://localhost:8070/images/avatar2.png",
        description: description,
        duration: "3:60",
        views: "360,000",
        likes: "36,000",
        duration: "3:60",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [
            {
                "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
                "name": "James Simspon",
                "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
                "likes": 0,
                "timestamp":  Date.now()
            },
            {
                "id": "091de676-61af-4ee6-90de-3a7a53af7521",
                "name": "Booker Johnson",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "likes": 0,
                "timestamp": Date.now()
            },
            {
                "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
                "name": "Theodore Volt",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
                "likes": 0,
                "timestamp":  Date.now()
            }]
    }

    const allVideos = JSON.parse(fs.readFileSync('data/videos.json'));

    allVideos.push(newPostVideo);

    fs.writeFileSync('data/videos.json', JSON.stringify(allVideos))

    return res.json({
        newPostVideo
    })

})
//you have to filter out your comments, but does this have to be within
//the router id section 

module.exports = router;

//you only changing 

