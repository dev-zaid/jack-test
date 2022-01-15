require("dotenv").config();

const amqbURL = `amqp://${process.env.User}:${process.env.Password}@${process.env.IP}:${process.env.Port}/${process.env.vHost}`;
const queueSlug = "jack-ki-crush-test";

module.exports = { amqbURL, queueSlug };