import {ChatOpenAI} from "@langchain/openai"
import {PromptTemplate} from "@langchain/core/prompts"
import {CommaSeparatedListOutputParser} from "@langchain/core/output_parsers"

const myModel = new ChatOpenAI({
    model: "gpt-4o"
})

const templateString = "List 10 countries in {continent}.\n{format_instructions}"

const template = PromptTemplate.fromTemplate(templateString)

const listParser = new CommaSeparatedListOutputParser()

const formatInstructions = listParser.getFormatInstructions()

//console.log(formatInstructions)

const chain  = template.pipe(myModel)

const response = await chain.invoke({
    continent: "Europe",
    format_instructions: formatInstructions
})

const listOutput = await listParser.parse(response.content)

console.log(listOutput)