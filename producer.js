const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  for (let i = 0; i < 10; i++) {
    await producer.send({
      topic: "my-topic",
      messages: [{ value: `This is message ${i}` }],
    });
    console.log(`Message ${i} sent`);
  }
  await producer.disconnect();
};

run().catch(console.error);
