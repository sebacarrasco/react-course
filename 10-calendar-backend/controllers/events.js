const { response } = require('express');
const Event = require("../models/Event");

const getEvents = async(req, res = response) => {

    // El populate es para que no salga user: id_usuario,
    // sino que salga: user: { _id, name }
    // El id va siempre, pero así no mandamos la contraseña ni el mail.
    const events = await Event.find()
        .populate('user', 'name');

    res.json({
        ok: true,
        events
    });
}


const createEvent = async(req, res = response) => {

    const event = new Event(req.body);

    try {
        
        event.user = req.uid;

        const eventSaved = await event.save();
        res.status(201).json({
            ok: true,
            event: eventSaved
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
}


const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const { uid } = req;

    try {

        const event = await Event.findById(eventId);

        if (!event)
        {
            // 404 es de not found
            return res.status(404).json({
                ok: false,
                msg: "No existe un evento con ese id"
            });
        }

        if (event.user.toString() !== uid)
        {
            // 401 es cuando alguien trata de hacer algo que no está autorizado
            return res.status(401).json({
                ok: false,
                msg: "No tiene privilegio de editar este evento"
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }
        
        // El new: true es para que retorne el evento actualizado
        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });
        
        res.json({
            ok: true,
            event: updatedEvent
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }

}


const deleteEvent = async(req, res = response) => {
    const eventId = req.params.id;
    const { uid } = req;

    try {

        const event = await Event.findById(eventId);

        if (!event)
        {
            // 404 es de not found
            return res.status(404).json({
                ok: false,
                msg: "No existe un evento con ese id"
            });
        }

        if (event.user.toString() !== uid)
        {
            // 401 es cuando alguien trata de hacer algo que no está autorizado
            return res.status(401).json({
                ok: false,
                msg: "No tiene privilegio de eliminar este evento"
            });
        }
        
        await Event.findByIdAndDelete(eventId);
        
        res.json({
            ok: true
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}