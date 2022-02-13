import {
  MUSIC_PALY_IMG,
  MUSIC_PAUSE_IMG
} from '../../utils/constants.js'
import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    musics: [],
    playId: -1
  },
  onLoad: function () {
    api.getBrandContent({},() => {},() => {},(res) => {
      if (res.res === 0) {
        let brand = res.data
        let musics = this.data.musics

        brand.playImg = MUSIC_PALY_IMG
        brand.contentType = 'story'
        brand.story = util.filterContent(brand.story)
        brand.maketime = util.formatMakettime(brand.maketime)
        musics.push(brand)
        this.setData({ musics })
      }
    });
  },
  togglePlay: function (e) {
    let musics = this.data.musics
    let playId = this.data.playId
    let musicId = e.target.dataset.id
    let brand = musics.find((brand) => brand.id === musicId)

    musics = musics.map((brand) => {
      brand.playImg = MUSIC_PALY_IMG
      return brand
    })

    if (playId !== musicId) {
      playId = musicId
      brand.playImg = MUSIC_PAUSE_IMG
      this.playMusic(brand)
    } else {
      playId = -1
      brand.playImg = MUSIC_PALY_IMG
      this.pauseMusic()
    }

    this.setData({ musics, playId })
  },
  playMusic: function (brand) {  
    wx.playBackgroundAudio({
      dataUrl: brand.music_id,
      title: brand.title
    })
  },
  pauseMusic: function () {
    wx.pauseBackgroundAudio()
  },
  switchContent: function (e) {
    let id = e.currentTarget.dataset.id
    let type = e.target.dataset.type

    let musics = this.data.musics
    let brand = musics.find((brand) => brand.id === id)
    brand.contentType = type

    this.setData({ musics })
  }
})