import Ticket from '../../schema/ticket';
import constant from '../../constant';

export const create = async (req, res) =>{

    let addTickets = (data) => {
        return new Promise((resolve, reject) => {
            Ticket.insertMany(data, (err, insertedData) => {
                err ? reject(err) : resolve(insertedData);
            })
        })
    }

    try {
        console.log(req.body.data)
        const response =  await addTickets(req.body.data);
        res.status(constant.RESPONSE.OK.STATUS).send(response);
    } catch(e) {
        console.log(e)
        res.status(constant.RESPONSE.ERROR.STATUS).send(constant.RESPONSE.ERROR.MESSAGE)
    }
}
