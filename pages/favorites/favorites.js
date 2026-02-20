// pages/favorites/favorites.js
Page({
  data: {
    activeTab: 0,
    tutorList: [
      {
        id: 1,
        name: '张明华',
        avatar: '/images/tutor-zhang.png',
        school: '清华大学',
        department: '计算机科学与技术系',
        direction: '人工智能',
        date: '2026-02-08'
      },
      {
        id: 2,
        name: '李晓芳',
        avatar: '/images/tutor-li.png',
        school: '北京大学',
        department: '信息科学技术学院',
        direction: '机器学习',
        date: '2026-02-07'
      }
    ],
    projectList: [
      {
        id: 1,
        title: '新一代人工智能关键技术研究',
        leader: '张明华',
        progress: 60,
        date: '2026-02-06'
      },
      {
        id: 2,
        title: '智能制造产学研合作项目',
        leader: '王建国',
        progress: 75,
        date: '2026-02-05'
      }
    ],
    riskList: [
      {
        id: 1,
        tutor: '某导师A',
        type: '项目延期',
        date: '2026-02-08'
      }
    ]
  },

  onTabClick(e) {
    this.setData({ activeTab: parseInt(e.currentTarget.dataset.index) });
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/tutor-detail/tutor-detail?id=${id}`
    });
  }
})
