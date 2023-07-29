const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    console.log('Connected to database successfully');
    await mongoose.connect('mongodb://127.0.0.1:27017/codeAI_dev');
}
