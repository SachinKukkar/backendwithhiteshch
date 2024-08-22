import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready !');
// });


// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Atomic Humor",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Frostbite",
            content: "What do you get when you cross a snowman and a vampire? Frostbite."
        },
        {
            id: 3,
            title: "Scarecrow's Award",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "Nature's Bugs",
            content: "Why don't programmers like nature? It has too many bugs."
        },
        {
            id: 5,
            title: "Penguin's Igloo",
            content: "How does a penguin build its house? Igloos it together."
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});