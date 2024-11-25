import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import {ChatPromptTemplate} from "@langchain/core/prompts"
import {readFile} from "fs/promises"

const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash"
})

const myImage = await readFile("./picture.jpeg")

const base64Image = myImage.toString("base64")

const messages = [
    ["system", "Describe the image"],
    ["user", [
        {
            type: "image_url",
            image_url: "data:image/jpeg;base64,{myImage}"
        }
    ]]
]

const multiModalPrompt = ChatPromptTemplate.fromMessages(messages)

/* console.log(await multiModalPrompt.invoke({
    myImage: base64Image
})) */

const multiModalChain = multiModalPrompt.pipe(geminiModel)

const response = await multiModalChain.invoke({
    myImage: base64Image
})

console.log(response.content)