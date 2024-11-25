import {ChatOpenAI} from "@langchain/openai"
import {PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from "@langchain/core/runnables"

const myModel = new ChatOpenAI({
    model: "gpt-4o"
})

const templateString = "Suggest 3 nicknames for a {pet_animal}"

const template = PromptTemplate.fromTemplate(templateString)

const templateString2 = "Which of these {pet_names} is also a good pet name for a dog"

const template2 = PromptTemplate.fromTemplate(templateString2)

const chain = template.pipe(myModel)

const composedChain = RunnableSequence.from([
    chain,
    (input) => ({pet_names : input.content}),
    template2,
    myModel
])

const response = await composedChain.invoke({
    pet_animal: "Cat"
})

console.log(response.content)
