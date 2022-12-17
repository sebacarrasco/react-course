const { Schema, model } = require("mongoose");

const EventSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// Lo siguiente no es estrictamente neceseario, es solo para que al mandar
// un evento en la respuesta, no envíe su versión y el id esté en la
// propiedad "id" y no en la "_id" (esto no hace modificaciones en la bdd)
EventSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
// Es necesario que sea function para acceder al this

module.exports = model('Event', EventSchema);