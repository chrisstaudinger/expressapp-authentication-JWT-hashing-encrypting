const dbConnection = (err) => {
  if (err) {
    console.log('db not connected ❌')
  } else {
    console.log(`db connected ✅`)
  }
}

const db = 'mongodb://localhost:27017/users-database-jsonwebtoken'
const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true}


module.exports = {
  db,
  dbOptions,
  dbConnection
}
