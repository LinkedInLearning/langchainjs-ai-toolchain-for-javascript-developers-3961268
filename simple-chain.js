import {ChatOpenAI} from "@langchain/openai"
import {PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from "@langchain/core/runnables"

const myModel = new ChatOpenAI({
    model: "gpt-4o"
})

const templateString = "Suggest 3 nicknames for a {pet_animal}"

const template = PromptTemplate.fromTemplate(templateString)

/* const chain = RunnableSequence.from([
    template,
    myModel
]) */

const chain = template.pipe(myModel)

const response = await chain.invoke({
    pet_animal: "Cat"
})

console.log(response.content)