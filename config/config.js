const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://shubhamk123:shubham@123@cluster1.id2o7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  //serverUrl: process.env.serverUrl || 'http://localhost:3000'
}

export default config
