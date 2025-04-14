const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const userMessage = body.message;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: userMessage }],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ reply: response.data.choices[0].message.content }),
  };
};