// pages/tutor-detail/tutor-detail.js
Page({
  data: {
    activeTab: 0,
    tabs: ['个人简介', '学术成果', '合作资源', '学生培养', '项目', '风险排查', '社会关系'],
    isCollected: false,
    tutor: {
      id: 1,
      name: '张明华',
      avatar: '/images/tutor-zhang.png',
      school: '清华大学',
      department: '计算机科学与技术系',
      tags: ['985博导', '中国科学院院士', '人工智能'],
      // Tab 0: 个人简介 (Growth)
      bio: '张明华，清华大学计算机科学与技术系教授，博士生导师，中国科学院院士。长期从事人工智能、机器学习、计算机视觉等领域的研究工作。发表顶级论文150+篇，主持国家重点研发计划3项。',
      direction: '人工智能、机器学习、计算机视觉、深度学习',
      growthPath: [
        { year: '2020-至今', content: '清华大学计算机科学与技术系教授', type: '工作经历' },
        { year: '2019', content: '获国家杰出青年科学基金', type: '荣誉' },
        { year: '2015-2020', content: '清华大学计算机科学与技术系副教授', type: '工作经历' },
        { year: '2010-2015', content: '清华大学计算机科学与技术系讲师', type: '工作经历' },
        { year: '2010', content: '获斯坦福大学计算机科学博士学位', type: '教育经历' },
        { year: '2006', content: '获清华大学计算机科学硕士学位', type: '教育经历' }
      ],
      
      // Tab 1: 学术成果 (Achievements)
      achievements: '发表顶级论文150+篇，引用次数超过10000次。获得国家自然科学二等奖1项，教育部自然科学一等奖2项。',
      papers: [
        { id: 1, title: 'Deep Residual Learning for Image Recognition', journal: 'CVPR', year: '2016' },
        { id: 2, title: 'Attention Is All You Need', journal: 'NIPS', year: '2017' },
        { id: 3, title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding', journal: 'NAACL', year: '2019' }
      ],

      // Tab 2: 合作资源 (Cooperation)
      coops: [
        { id: 1, name: 'Google AI Lab', type: '企业合作', desc: '联合开展深度学习模型研究' },
        { id: 2, name: '微软亚洲研究院', type: '学术合作', desc: '共同举办学术研讨会' }
      ],

      // Tab 3: 学生培养 (Students)
      guidance: '已指导博士生30余名，硕士生50余名。多名学生获得国家奖学金、优秀毕业生称号。',
      students: [
        { id: 1, name: '李某某', year: '2018级博士', dest: '阿里达摩院' },
        { id: 2, name: '王某某', year: '2019级硕士', dest: '腾讯AI Lab' }
      ],

      // Tab 4: 项目 (Projects)
      projects: [
        { id: 1, title: '新一代人工智能关键技术研究', role: '负责人', desc: '国家重点研发计划，研究新一代人工智能的基础理论和关键技术。' },
        { id: 2, title: '大规模视觉理解与分析', role: '首席科学家', desc: '针对海量视频数据进行深度理解和分析，应用于智慧城市建设。' }
      ],

      // Tab 5: 风险排查 (Risk)
      risks: [
         { id: 1, type: '低风险', content: '近三年无学术不端记录' },
         { id: 2, type: '正常', content: '科研经费使用规范' }
      ],

      // Tab 6: 社会关系 (Social)
      service: '中国人工智能学会副理事长，NeurIPS、ICML等国际会议领域主席。',
      socials: [
        { id: 1, role: '副理事长', org: '中国人工智能学会' },
        { id: 2, role: '领域主席', org: 'NeurIPS' }
      ]
    }
  },

  onLoad(options) {
    if (options.id) {
      // Fetch tutor details by id
      // Mock data for now
      if (options.id === '2') {
        this.setData({
          tutor: {
            id: 2,
            name: '李晓芳',
            avatar: '/images/tutor-li.png',
            school: '北京大学',
            department: '信息科学技术学院',
            tags: ['国家杰青', '院长', '机器学习'],
            bio: '李晓芳，北京大学信息科学技术学院院长，教授，博士生导师。获国家杰出青年基金资助。主要研究方向为机器学习、数据挖掘。',
            direction: '机器学习、数据挖掘、大数据分析',
            achievements: '在ICML、KDD等会议发表论文80余篇。获国家科技进步二等奖。',
            service: 'ACM SIGKDD China Chapter Chair。',
            guidance: '指导博士生20余名，多人在BAT等大厂任职。',
            papers: [
                { id: 1, title: 'Large-scale Machine Learning', journal: 'KDD', year: '2018' },
                { id: 2, title: 'Data Mining in Social Networks', journal: 'ICDE', year: '2020' }
            ],
            projects: [],
            coops: [],
            students: [],
            risks: [],
            socials: []
          }
        });
      } else if (options.id === '3') {
        this.setData({
          tutor: {
            id: 3,
            name: '王建国',
            avatar: '/images/tutor-wang.png',
            school: '浙江大学',
            department: '控制科学与工程学院',
            tags: ['国家杰青', '博导', '智能控制'],
            bio: '王建国，浙江大学控制科学与工程学院副院长，教授。研究领域包括智能控制、工业自动化。',
            direction: '智能控制、工业互联网、自动化系统',
            achievements: '授权发明专利40余项。',
            service: 'IEEE Transactions on Industrial Electronics Associate Editor。',
            guidance: '指导研究生获得省优秀硕士论文。',
            papers: [],
            projects: [
                { id: 1, title: '智能工厂控制系统', role: '负责人', desc: '研发新一代智能工厂分布式控制系统。' }
            ],
            coops: [],
            students: [],
            risks: [],
            socials: []
          }
        });
      }
    }
  },

  onTabClick(e) {
    this.setData({ activeTab: parseInt(e.currentTarget.dataset.index) });
  },

  onCollect() {
    this.setData({ isCollected: !this.data.isCollected });
    wx.showToast({
      title: this.data.isCollected ? '已收藏' : '已取消收藏',
      icon: 'none'
    });
  },

  onContact() {
    wx.showModal({
      title: '提示',
      content: '请先登录或开通会员以获取联系方式',
      confirmText: '去开通',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({ url: '/pages/user/user' });
        }
      }
    });
  }
})
