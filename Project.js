const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    description: {  
        type: String,
        required: true
    },
    github: {   
        type: Array,
        required: true
    },
    live: {   
        type: String,
        required: true
    },
})

const project = mongoose.model('project', ProjectSchema, 'projects');

module.exports = project;