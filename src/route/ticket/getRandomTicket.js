import Ticket from '../../schema/ticket';
import constant from '../../constant';

export const findOne = async (req, res) =>{

    let getTicket = () => {
        return new Promise((resolve, reject) => {
            Ticket.findOne({ isSold: false }, 'ticketId seatNumber isSold').exec((err, data) => {
                err ? reject(err) : resolve(data);
            })
        })
    }

    let updateTicket = (_id, data) => {
        return new Promise((resolve, reject) => {
            Ticket.findByIdAndUpdate(_id, data, { new: true }).exec((err, data) => {
                err ? reject(err) : resolve(data);
            })
        })
    }

    try{
        let ticket =  await getTicket();
        if (ticket) {
            await updateTicket(ticket._id, { isSold: true })
            res.status(constant.RESPONSE.OK.STATUS).send(ticket);
        } else {
            res.status(constant.RESPONSE.OK.STATUS).send("No ticket available")
        }
    } catch(e) {
        res.status(constant.RESPONSE.ERROR.STATUS).send(constant.RESPONSE.ERROR.MESSAGE)
    }
}
