const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//the library need to configured with the accounds secret key, which is we got from the website. we set is as an envrionmental variable.
const generateImage = async (req, res) => {
  const { prompt, size } = req.body; // if you go to the body of postman you can type these to in

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });
    //create image is recognized in nod with the object above
    //number of images, is what n stand for
    const imageUrl = response.data.data[0].url; //will gve us image url

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
};
module.exports = { generateImage };

//use openai here
//this wiil be asynch cuzz the open ai library will give us a promise
