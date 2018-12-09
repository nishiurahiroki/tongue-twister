import React, {useContext, useEffect} from 'react'
import { render } from 'react-dom'

import { Provider, Store } from '../store'

import TongueTwisterRepository from '../repositories/TongueTwisterRepository'

const ReTryButton = ({onClick}) => (
  <div
    onClick={onClick}
    style={{marginTop : '2vh', textAlign:'center'}}
    className="siimple-btn siimple-btn--teal siimple-btn--fluid">
    リトライ
  </div>
)

const TongueTwister = () => {
  const {state, dispatch} = useContext(Store)

  useEffect(() => {
    dispatch({
      type : 'SET_TONGUE_TWISTER',
      tongueTwister : state.tongueTwisterList.next().value
    })

    const speech = new webkitSpeechRecognition()
    speech.lang = 'ja-JP'
    speech.start()
    speech.onresult = ({results}) => {
      speech.stop()
      if(results[0].isFinal) {
        dispatch({
          type : 'SAIED_TONGUE_TWISTER',
          saiedWord : results[0][0].transcript
        })
      }
    }
    speech.onend = () => speech.start()
  },[])

  return (
    <>
      <div className="siimple-box siimple-box--orange" style={{textAlign:'center'}}>
        <div className="siimple-box-title">{state.tongueTwister}</div>
        <div className="siimple-box-subtitle">{state.result}</div>
        <div className="siimple-box-detail">
          {state.isFinished ?
            '' : <><i className="fas fa-microphone"></i>声に出して読み上げて下さい<i className="fas fa-microphone"></i></>
          }
        </div>
      </div>

      {state.isFinished ?
        <ReTryButton onClick={() => dispatch({type : 'RESET_ALL'})} />
        : ''
      }
    </>
  )
}

export default TongueTwister
