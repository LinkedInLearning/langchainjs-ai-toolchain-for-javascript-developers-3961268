import {ChatOpenAI} from "@langchain/openai"
import {ChatPromptTemplate} from "@langchain/core/prompts"

const model = new ChatOpenAI({
    model: "gpt-4o"
})

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["user", "Write a poem about the tallest mountains"]
])

const formattedPrompt = await promptTemplate.format({})

const response = await model.invoke(formattedPrompt)

console.log(response.usage_metadata.input_tokens)

console.log(response.usage_metadata.output_tokens)

console.log(response.usage_metadata.total_tokens)