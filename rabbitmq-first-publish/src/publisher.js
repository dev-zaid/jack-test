import {amqbConnect} from "./connection.js";
import { queueSlug } from "./CONSTANTS.js";

const publisher = async() => {
    try {
        const channel = await amqbConnect();
        await channel.assertQueue(queueSlug);
        channel.sendToQueue(
            queueSlug, 
            Buffer.from("Shashank Bhaiya OP"));
        
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(0);
    }
    
};

publisher();