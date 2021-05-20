const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))


const persons = [
    {
      "name": "Tara Purasson",
      "number": "9086423434",
      "id": "2"
    },
    {
      "name": "Gracen Galante",
      "number": "9144201768",
      "id": "3"
    },
    {
      "name": "Emily Fraser",
      "number": "9148151537",
      "id": "4"
    },
    {
      "name": "Nick Fraser",
      "number": "9148155019",
      "id": "6"
    },
    {
      "name": "Arto Hellas",
      "number": "1234567890",
      "id": "7"
    },
    {
      "name": "Ada Lovelace",
      "number": "9876543210",
      "id": "8"
    }
]


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the dang backend, man!</h1>`)
})


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) =>{
    const id = String(req.params.id);
    const person = persons.find(person => person.id === id);
    if(person){
        console.log('found person!', person)
        res.json(person)
    }else{
        res.send(`<em>Oh Fuck...</em><h6>Cant find a person with id: ${id}</h6>`)
        console.log('couldnt find person')
    }
});

app.post('/api/persons', (req, res) => {
    const newPerson = {
        "id": req.body.id,
        "name": req.body.name,
        "number": req.body.number
    };
    duplicates = persons.filter(person => person.id === newPerson.id)
    if(duplicates.length){
        console.log("Duplicate person error")
    }else{
        persons = persons.concat(newPerson);
        let names = persons.map(person=> person.name)
        res.send(`<h3>Success</h3><em>${req.body.name} was added!</em><p>persons: ${names}</p>`)
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

console.log('PHONEBOOK-BACKEND IS LIVE')