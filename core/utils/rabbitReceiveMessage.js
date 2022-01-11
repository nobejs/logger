const amqp = require("amqplib");

const rabbitReceiveMessage = async (amqp_endpoint, q, storyName) => {
  var conn;
  try {
    conn = await amqp.connect(amqp_endpoint);
    const ch = await conn.createChannel();
    var ok = await ch.assertQueue(q, { durable: true });
    ch.consume(q, async (msg) => {
      if (msg !== null) {
        try {
          await queueJobStrategy(storyName, {
            job: JSON.parse(msg.content.toString()),
          });
          await ch.ack(msg);
        } catch (error) {
          if (error.ack) {
            await ch.ack(msg);
          }
        }
      }
    });
  } catch (error) {
    throw error;
  } finally {
  }
};

module.exports = rabbitReceiveMessage;
