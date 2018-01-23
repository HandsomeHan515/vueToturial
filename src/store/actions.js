import { request } from '../service'

export const changeMsg = ({ commit }) => {
  commit({
    type: 'mutationsMsg',
    msg: '我是修改后的数据~~~'
  })
}

export const getAds = ({ commit }) => {
  request({
    url: 'http://api.handsomehan.cn:10001/v1/ads/',
    hasCert: false
  }).then(resp => {
    commit({
      type: 'getAds',
      ads: resp.results
    })
  })
}

export const updateAd = ({ commit }, payload) => {
  request({
    url: `http://api.handsomehan.cn:10001/v1/ads/${payload.id}/`,
    method: 'PATCH',
    body: JSON.stringify(payload),
    hasCert: false
  }).then(resp => {
    commit({
      type: 'updateAd',
      ad: resp
    })
  })
}

export const delAd = ({ commit }, payload) => {
  request({
    url: `http://api.handsomehan.cn:10001/v1/ads/${payload.id}/`,
    method: 'DELETE',
    hasCert: false,
    isJson: false
  }).then(resp => {
    commit({
      type: 'delAd',
      ad: payload
    })
  })
}

export const addAd = ({ commit }, payload) => {
  console.log('payload: %o', payload)
  request({
    url: `http://api.handsomehan.cn:10001/v1/ads/`,
    method: 'POST',
    body: JSON.stringify(payload),
    hasCert: false
  }).then(resp => {
    commit({
      type: 'addAd',
      ad: resp
    })
  })
}
