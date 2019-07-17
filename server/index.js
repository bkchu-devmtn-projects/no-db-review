const express = require('express');
const { json } = require('body-parser');
const peopleCtrl = require('./controllers/peopleCtrl');

const app = express();

app.use(json());

//testing endpoint
app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Connected!' });
});

//getPeople
app.get('/api/people', peopleCtrl.getPeople);

// FRONT-END: axios.get('/api/people/filter/j').then(response => this.setState({}));
app.get('/api/people/filter/:filter', peopleCtrl.getFilteredPeople);
app.post('/api/people', peopleCtrl.createPerson);

// FRONT-END: axios.delete('/api/people/8').then(response => this.setState({}));
app.delete('/api/people/:id', peopleCtrl.deletePerson);

// FRONT-END: axios.put('/api/people/3').then(response => thisaldkfjawefoijwaeofij);
app.put('/api/people/:id', peopleCtrl.updatePerson);

app.post('/api/putsomethinginarray', peopleCtrl.putSomethingInArray)

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
