'use strict';
import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    ticketId: { type: String },
    seatNumber: { type: String },
    isSold: { type: Boolean, default: false }
});

module.exports = mongoose.model('ticket', TicketSchema);
