```javascript
const query = {  user: 'John Doe' };

db.collection('users').findOne(query, (err, result) => {
  if (err) throw err; //This will cause an error if findOne fails
  console.log(result); //If no document matches the query this will log null
});
```