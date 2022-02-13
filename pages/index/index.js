import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    vols: [],
    current: 0
  },
  onLoad: function () {
    api.getVolIdList({},() => {},() => {},(res) => {
      this.getVols(res);
    });
  },
  getVols: function (idList) {
    let vols = this.data.vols 

    if (idList.length > 0) {
      api.getVolById({id: idList.shift()},() => {},() => {},(res) => {
          if (res.res === 0) {
            let vol = res.data
            
            vol.hp_makettime = util.formatMakettime(vol.hp_makettime)
            vols.push(vol)
          }
          this.getVols(idList)
      }); 
    } else {
      this.setData({ vols })
    }
  }
})
