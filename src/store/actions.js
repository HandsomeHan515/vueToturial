import { request } from '../service'

export const changeMsg = ({ commit }) => {
  commit({
    type: 'mutationsMsg',
    msg: '我是修改后的数据~~~'
  })
}

export const changeAds = ({ commit }) => {
  request({
    url: 'http://api.handsomehan.cn:10001/v1/ads/',
    hasCert: false
  }).then(resp => {
    commit({
      type: 'mutationsAds',
      ads: resp.results
    })
  })
}