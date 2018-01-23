export const mutationsMsg = (state, payload) => {
  state.msg = payload.msg
}

export const getAds = (state, payload) => {
  state.ads = payload.ads
}

export const updateAd = (state, payload) => {
  let newSate = state.ads.map(item => {
    if (item.id === payload.ad.id) {
      item = payload.ad
    }
    return item
  })

  state.ads = newSate
}

export const delAd = (state, payload) => {
  state.ads = state.ads.filter(item => {
    if (item.id === payload.ad.id) {
      return false
    } else {
      return item
    }
  })
}

export const addAd = (state, payload) => {
  state.ads = [
    ...state.ads,
    payload.ad
  ]
}
