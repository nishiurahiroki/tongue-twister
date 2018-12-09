import initialState from './state'

import TongueTwisterRepository, {generateTongueTwisterList} from './repositories/TongueTwisterRepository'

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_TONGUE_TWISTER':
     return {
       ...state,
       tongueTwister : action.tongueTwister
     }
    case 'RESULT':
      return {
        ...state,
        result : action.result
      }
    case 'SAIED_TONGUE_TWISTER':
      const isSuccess = action.saiedWord.replace(/[ |　]/g, '') === state.tongueTwister.replace(/[ |　]/g, '')
      if(isSuccess) {
        const {value, done} = state.tongueTwisterList.next()
        return {
          ...state,
          tongueTwister : done ? '' : value,
          result : done ? '🎊CLEAR❗️ CONGRATULATION🎉' : `✅🆗❗️🤗  ⬆️NEXT WORD⬆️`,
          isFinished : done
        }
      } else {
        return {
          ...state,
          tongueTwister : state.tongueTwister,
          result : `${action.saiedWord}❔🤔`
        }
      }
    case 'RESET_ALL':
      initialState.tongueTwisterList = generateTongueTwisterList(TongueTwisterRepository.getList())
      initialState.tongueTwister = initialState.tongueTwisterList.next().value
      return initialState
    default:
      return state
  }
}

export default reducer
