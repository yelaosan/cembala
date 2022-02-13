module.exports = {  
    getVolIdList(data, success, error, complete) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    let value = require('../data/data_index.js').index.data;
    complete && complete(value);
    wx.hideToast();

    // wx.request({
    //   url: url || '',
    //   method: 'GET',
    //   data: data || {},
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: (res) => {
    //     success && success(res);
    //   },
    //   fail: (res) => {
    //     fail && fail(res) 
    //   },
    //   complete: (res) => { 
    //     let data = require('../data/data_index.js').index.data;
    //     complete && complete(data);
    //     wx.hideToast();
    //   }
    // })
  },
  getVolById(data, success, error, complete) {
    wx.showToast({
      title: '加载中', 
      icon: 'loading'
    })
    let value = require('../data/data_detail.js').detail[data.id];
    complete && complete(value);
    wx.hideToast();

    // wx.request({
    //   url: url || '',
    //   method: 'GET',
    //   data: data || {},
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: (res) => {
    //     success && success(res);
    //   },
    //   fail: (res) => {
    //     fail && fail(res) 
    //   },
    //   complete: (res) => { 
    //     let value = require('../data/data_detail.js').detail[data.id];
    //     complete && complete(value);
    //     wx.hideToast();
    //   }
    // })
  },
  getBrandContent(data, success, error, complete) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    let value = require('../data/data_brand.js').brand;
    complete && complete(value);
    wx.hideToast();

    // wx.request({
    //   url: url || '',
    //   method: 'GET',
    //   data: data || {},
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: (res) => {
    //     success && success(res);
    //   },
    //   fail: (res) => {
    //     fail && fail(res) 
    //   },
    //   complete: (res) => { 
    //     let data = require('../data/data_brand.js').brand;
    //     complete && complete(data);
    //     wx.hideToast();
    //   }
    // })
  }
}