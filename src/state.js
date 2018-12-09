import TongueTwisterRepository, {generateTongueTwisterList} from './repositories/TongueTwisterRepository'

export default {
  tongueTwister : '',
  result : '',
  tongueTwisterList : generateTongueTwisterList(TongueTwisterRepository.getList()),
  isFinished : false
}
