export default class TongueTwisterRepository {
  static getList() { // TODO Promise value, TODO fetch DB
    return [
      '生麦生米生卵',
      '東京特許許可局',
      '庭には鶏が二羽いました',
      '赤パジャマ黄パジャマ茶パジャマ',
      '骨粗鬆症訴訟勝訴',
      '国語熟語述語主語',
      '青巻紙赤巻紙黄巻紙',
      'ニャンコ子ニャンコ孫ニャンコ',
      '生ナマズ生ナマコ生なめこ',
      '買った肩叩き高かった',
      'シチュー死守しつつ試食し視聴中',
      'バナナの謎はまだ謎なのだぞ'
    ]
  }
}

export function* generateTongueTwisterList(tongueTwisterList) {
  const shuffle = () => Math.random() - .5
  for(let tongueTwister of tongueTwisterList.sort(shuffle)) {
    yield tongueTwister
  }
}
