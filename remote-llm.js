import {ChatOpenAI} from "@langchain/openai"

const openAIModel = new ChatOpenAI({
    model: "gpt-4o"
})

const response = await openAIModel.invoke("What is the capital of France?")

console.log(response)