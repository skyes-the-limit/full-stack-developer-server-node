import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = {
    ...req.body,
    _id: (new Date()).getTime() + '',
    postedBy: {
      username: "ReactJS",
      handle: 'react-js',
      profileImgSrc: 'https://reactjs.org/logo-og.png'
    },
    stats: {
      retuits: 0,
      likes: 0,
      replies: 0
    },
    liked: false,
    timeStamp: "just now"
  }
  tuits.push(newTuit);
  res.json(newTuit);
}

const findAllTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
