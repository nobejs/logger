const Config = require("./config")();
const httpServer = requireHttpServer();
const rabbitReceiveMessage = requireUtil("rabbitReceiveMessage");

const server = httpServer({});

(async () => {
  try {
    await rabbitReceiveMessage(
      process.env.AMQP_URL,
      (process.env.ENV_PREFIX || "dev") + "_logger",
      "Logs/ReceiveLogFromQueue"
    );
  } catch (error) {
    console.log("error at server.js level-- ---  - -", error);
  }
})();

server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
