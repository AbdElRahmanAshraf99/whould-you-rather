import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions"
import { RECEIVE_USERS } from "../actions/users"

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users }

    case ANSWER_QUESTION:
      console.log(action)
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      }

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id],
        },
      }

    default:
      return state
  }
}
