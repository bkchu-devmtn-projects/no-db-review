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
app.get('/api/people/filter/:filter', peopleCtrl.getFilteredPeople);
app.post('/api/people', peopleCtrl.createPerson);
app.delete('/api/people/:id', peopleCtrl.deletePerson);
app.put('/api/people/:id', peopleCtrl.updatePerson);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
