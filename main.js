const express = require('express');
const app = express();
const fs = require('fs');

const graphqlHTTP = require('express-graphql');
import schema from './schema';

app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


const rawData = JSON.parse(fs.readFileSync('./books-test-collection.json', 'utf8'));
const inStock = rawData.filter(el=>el.active);
const root = {
    getBooks: (data) => {
        let start = data.page*10 - 10;
        let query = data.active ? inStock : rawData;
        var res = [];
        for (var i = start; i < start + 10; i++) {
            res.push(query[i]);
        }
        return res;
    },
    searchBooks: (data) => {
        let query = data.search.toLowerCase();
        return rawData.filter(el=>el.title.toLowerCase().indexOf(query) != -1).splice(0,10);
    }
}



app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8000, () => {
    console.log('server started');
})
