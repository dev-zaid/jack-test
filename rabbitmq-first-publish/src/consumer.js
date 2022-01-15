import {amqbConnect} from "./connection.js";
import {connect} from "amqplib";
import { queueSlug } from "./CONSTANTS.js";

const consumer = async() => {
    try {
        const channel = await amqbConnect();
        await channel.assertQueue(queueSlug);

        channel.consume(queueSlug, (msg) => {
            if (msg !== null){
                console.log(msg.content.toString());
                channel.ack(msg);
            }
        });

        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
};

consumer();