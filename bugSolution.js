```javascript
const query = { user: 'John Doe' };

db.collection('users').findOne(query, (err, result) => {
  if (err) {
    console.error('Error:', err); //Proper error handling
    //Take action based on the error (e.g., retry, log, alert)
    return;
  }

  if (!result) {
    console.log('No user found.'); //Handle null result gracefully
  } else {
    console.log(result);
  }
});
```