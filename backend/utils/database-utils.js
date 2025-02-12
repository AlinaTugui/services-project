import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);

export const sportEventSchema = new mongoose.Schema({
    eventname: { type: String, required: true },
    teamsName: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
});

export const SportEvent = mongoose.model('SportEvent', sportEventSchema);

export const ticketSchema = new mongoose.Schema({
    eventid: { type: mongoose.Schema.Types.ObjectId, required: true },
    buyerid: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export const Ticket = mongoose.model('Ticket', ticketSchema);