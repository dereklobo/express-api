require('dotenv').config()
var OpenAI =  require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_IMAGE_API_KEY,
});

const generateImage = async(req, res) => {

    try{
        const image = await client.images.generate({ model: "dall-e-2", prompt: "A cute baby sea otter" });

        res.status(200).json({
            success: true,
            data: image.data.data
        })

    } catch(error) {
        console.log(error)
    }
    
}

module.exports = { generateImage }