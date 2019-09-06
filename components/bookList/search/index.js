// components/bookList/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isSearching: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activateSearchPanel() {
      this.setData({
        isSearching: true
      })
    },
    deactivateSearchPanel: function(event) {
      this.setData({
        isSearching: false
      })
      console.log(event.target)
    }
  }
})