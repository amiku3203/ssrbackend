const mongoose = require('mongoose');

main().catch(err => console.log(`Error connecting to MongoDB: ${err.message}`));

async function main() {
  try {
    await mongoose.connect('mongodb+srv://biztoindia5:wFqqe1W5y5DEy8JY@cluster0.iiqqpxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Successfully connected to MongoDB !');
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message}`);
  }
}


// o6qMs751BB92ib7q