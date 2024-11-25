import {ChatOpenAI} from "@langchain/openai"
import {StringOutputParser} from "@langchain/core/output_parsers"

const myModel = new ChatOpenAI({
    model: "gpt-4o"
})

const response = await myModel.invoke("What do you think about humming birds")

const stringParser = new StringOutputParser()

const birdFacts = await stringParser.parse(response.content)

console.log(typeof birdFacts);