import {amqbURL, queueSlug} from "./CONSTANTS.js";

const amqbConnect = async() => {
    try {
        const connecion = await connect(amqbURL);
        const channel = await connecion.createChannel();
        return channel;
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {amqbConnect};