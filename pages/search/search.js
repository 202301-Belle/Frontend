// pages/search/search.js

// 院校数据映射表
const CITY_SCHOOLS_MAP = {
  'beijing': [
    { label: '全部', value: '', selected: true },
    { label: '清华大学', value: 'tsinghua', selected: false },
    { label: '北京大学', value: 'pku', selected: false },
    { label: '中国人民大学', value: 'ruc', selected: false },
    { label: '北京航空航天大学', value: 'buaa', selected: false },
    { label: '北京理工大学', value: 'bit', selected: false },
    { label: '北京师范大学', value: 'bnu', selected: false },
  ],
  'shanghai': [
    { label: '全部', value: '', selected: true },
    { label: '复旦大学', value: 'fudan', selected: false },
    { label: '上海交通大学', value: 'sjtu', selected: false },
    { label: '同济大学', value: 'tongji', selected: false },
    { label: '华东师范大学', value: 'ecnu', selected: false },
    { label: '上海大学', value: 'shu', selected: false },
  ],
  'guangdong': [
    { label: '全部', value: '', selected: true },
    { label: '中山大学', value: 'sysu', selected: false },
    { label: '华南理工大学', value: 'scut', selected: false },
    { label: '暨南大学', value: 'jnu', selected: false },
    { label: '深圳大学', value: 'szu', selected: false },
    { label: '南方科技大学', value: 'sustech', selected: false },
  ],
  'jiangsu': [
    { label: '全部', value: '', selected: true },
    { label: '南京大学', value: 'nju', selected: false },
    { label: '东南大学', value: 'seu', selected: false },
    { label: '南京航空航天大学', value: 'nuaa', selected: false },
    { label: '南京理工大学', value: 'njust', selected: false },
    { label: '苏州大学', value: 'suda', selected: false },
  ],
  'zhejiang': [
    { label: '全部', value: '', selected: true },
    { label: '浙江大学', value: 'zju', selected: false },
    { label: '宁波大学', value: 'nbu', selected: false },
    { label: '浙江工业大学', value: 'zjut', selected: false },
  ],
  'sichuan': [
    { label: '全部', value: '', selected: true },
    { label: '四川大学', value: 'scu', selected: false },
    { label: '电子科技大学', value: 'uestc', selected: false },
    { label: '西南交通大学', value: 'swjtu', selected: false },
    { label: '西南财经大学', value: 'swufe', selected: false },
  ],
  'default': [
    { label: '全部', value: '', selected: true },
    { label: '清华大学', value: 'tsinghua', selected: false },
    { label: '北京大学', value: 'pku', selected: false },
    { label: '浙江大学', value: 'zju', selected: false },
    { label: '复旦大学', value: 'fudan', selected: false },
    { label: '上海交通大学', value: 'sjtu', selected: false },
    { label: '南京大学', value: 'nju', selected: false },
    { label: '中国科学技术大学', value: 'ustc', selected: false },
    { label: '哈尔滨工业大学', value: 'hit', selected: false },
    { label: '西安交通大学', value: 'xjtu', selected: false },
  ]
};

Page({
  data: {
    keyword: '',
    totalCount: 0,
    showResults: false, // 默认不显示结果列表，显示筛选面板
    searchMode: 'filter', // 'filter' | 'result'
    
    // 筛选选项数据
    filterData: {
      groups: [
        {
          title: '学科领域',
          key: 'subject',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '计算机科学', value: 'cs', selected: false },
            { label: '人工智能', value: 'ai', selected: false },
            { label: '经济学', value: 'econ', selected: false },
            { label: '物理学', value: 'phy', selected: false },
            { label: '化学', value: 'chem', selected: false },
            { label: '生物学', value: 'bio', selected: false },
          ]
        },
        {
          title: '职称',
          key: 'title',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '教授', value: 'prof', selected: false },
            { label: '副教授', value: 'assoc', selected: false },
            { label: '讲师', value: 'lec', selected: false },
            { label: '研究员', value: 'res', selected: false },
          ]
        },
        {
          title: '所在省市',
          key: 'city',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '北京', value: 'beijing', selected: false },
            { label: '上海', value: 'shanghai', selected: false },
            { label: '广东', value: 'guangdong', selected: false },
            { label: '江苏', value: 'jiangsu', selected: false },
            { label: '浙江', value: 'zhejiang', selected: false },
            { label: '四川', value: 'sichuan', selected: false },
          ]
        },
        {
          title: '所属院校',
          key: 'school',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '清华大学', value: 'tsinghua', selected: false },
            { label: '北京大学', value: 'pku', selected: false },
            { label: '浙江大学', value: 'zju', selected: false },
            { label: '复旦大学', value: 'fudan', selected: false },
            { label: '上海交通大学', value: 'sjtu', selected: false },
            { label: '南京大学', value: 'nju', selected: false },
            { label: '中国科学技术大学', value: 'ustc', selected: false },
            { label: '哈尔滨工业大学', value: 'hit', selected: false },
            { label: '西安交通大学', value: 'xjtu', selected: false },
          ]
        },
        {
          title: '研究方向',
          key: 'direction',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '机器学习', value: 'ml', selected: false },
            { label: '计算机视觉', value: 'cv', selected: false },
            { label: '自然语言处理', value: 'nlp', selected: false },
            { label: '深度学习', value: 'dl', selected: false },
          ]
        },
        {
          title: '招生类型',
          key: 'recruit',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '硕士', value: 'master', selected: false },
            { label: '博士', value: 'phd', selected: false },
            { label: '博士后', value: 'postdoc', selected: false },
          ]
        },
        {
          title: '学术偏好',
          key: 'preference',
          options: [
            { label: '全部', value: '', selected: true },
            { label: '跨校合作', value: 'cross_school', selected: false },
            { label: '高产出学者', value: 'high_yield', selected: false },
            { label: '青年学者', value: 'young', selected: false },
          ]
        }
      ]
    },

    currentPage: 1,
    // Mock 导师列表数据
    tutorList: [
      {
        id: 1,
        name: '张明远',
        avatar: '/images/tutor-zhang.png',
        school: '清华大学',
        department: '计算机科学与技术系',
        direction: '人工智能',
        desc: '发表顶级论文150+篇，主持国家重点研发计划3项',
        tags: ['985博导', '中国科学院院士', '高产出'],
        titleTag: '教授'
      },
      {
        id: 2,
        name: '李晓华',
        avatar: '/images/tutor-li.png',
        school: '北京大学',
        department: '信息科学技术学院',
        direction: '机器学习',
        desc: '获国家杰青，培养博士30余名，就业率98%',
        tags: ['985博导', '杰青'],
        titleTag: '信息科学技术学院院长'
      },
      {
        id: 3,
        name: '王建国',
        avatar: '/images/tutor-wang.png',
        school: '浙江大学',
        department: '控制科学与工程学院',
        direction: '智能控制',
        desc: '国际合作项目5项，专利授权40+项',
        tags: ['211', '跨校合作'],
        titleTag: '副教授'
      },
      {
        id: 4,
        name: '陈雨婷',
        avatar: '/images/default-avatar.png',
        school: '复旦大学',
        department: '经济学院',
        direction: '宏观经济',
        desc: '专注于数字经济与宏观政策研究，发表多篇SSCI',
        tags: ['青年学者', '海归'],
        titleTag: '讲师'
      },
      {
        id: 5,
        name: '赵强',
        avatar: '/images/default-avatar.png',
        school: '上海交通大学',
        department: '人工智能研究院',
        direction: '计算机视觉',
        desc: 'CVPR/ICCV 审稿人，阿里达摩院合作学者',
        tags: ['985', '企业合作'],
        titleTag: '研究员'
      },
      {
        id: 6,
        name: '刘洋',
        avatar: '/images/default-avatar.png',
        school: '南京大学',
        department: '物理学院',
        direction: '凝聚态物理',
        desc: '国家自然科学基金优秀青年基金获得者',
        tags: ['优青', '高产出'],
        titleTag: '教授'
      }
    ]
  },

  onLoad(options) {
    if (options.keyword) {
      this.setData({ 
        keyword: options.keyword,
        searchMode: 'result',
        showResults: true
      });
      this.doSearch();
    } else {
      // 默认直接显示筛选面板
      this.setData({ searchMode: 'filter', showResults: false });
    }
  },

  onSearchConfirm(e) {
    const keyword = e.detail?.value || this.data.keyword;
    // 允许空关键词搜索（相当于仅根据筛选条件搜索）
    
    this.setData({ 
      keyword,
      searchMode: 'result',
      showResults: true
    });
    this.doSearch();
  },

  // 选择分组里的选项
  selectGroupOption(e) {
    const { groupIndex, optionIndex } = e.currentTarget.dataset;
    const filterData = this.data.filterData;
    const group = filterData.groups[groupIndex];
    const option = group.options[optionIndex];
    
    // 1. 处理选中逻辑 (单选)
    if (option.value === '') {
      // 如果点击的是"全部"
      if (option.selected) return; // 已经是选中状态，不处理
      group.options.forEach(opt => opt.selected = false);
      option.selected = true;
    } else {
      // 点击其他选项
      if (option.selected) {
        // 如果当前已选中，则取消选中，并自动选中"全部"
        option.selected = false;
        group.options[0].selected = true; 
      } else {
        // 如果当前未选中，则选中该项，并取消其他所有选项（包括"全部"）
        group.options.forEach(opt => opt.selected = false);
        option.selected = true;
      }
    }
    
    // 2. 处理联动逻辑 (省市 -> 院校)
    if (group.key === 'city') {
      const selectedCity = group.options.find(opt => opt.selected && opt.value !== '');
      const cityKey = selectedCity ? selectedCity.value : 'default';
      
      const schoolGroupIndex = filterData.groups.findIndex(g => g.key === 'school');
      if (schoolGroupIndex !== -1) {
        // 根据城市获取对应的院校列表
        const newOptions = (CITY_SCHOOLS_MAP[cityKey] || CITY_SCHOOLS_MAP['default']).map(o => ({...o}));
        
        // 更新院校分组的选项
        filterData.groups[schoolGroupIndex].options = newOptions;
      }
    }
    
    this.setData({
      filterData: filterData
    });

    // 这里不立即触发搜索，而是让用户点"确定"按钮
  },

  // 重置筛选
  resetFilter() {
    const filterData = this.data.filterData;
    filterData.groups.forEach(group => {
      // 重置选项
      group.options.forEach(opt => opt.selected = false);
      group.options[0].selected = true; // 选中"全部"
      
      // 特殊处理：如果是院校，重置为默认列表
      if (group.key === 'school') {
        group.options = CITY_SCHOOLS_MAP['default'].map(o => ({...o}));
      }
    });
    this.setData({ 'filterData': filterData });
  },

  // 切换回筛选面板
  openFilter() {
    this.setData({ showResults: false, searchMode: 'filter' });
  },

  // 确认筛选
  confirmFilter() {
    this.setData({ showResults: true, searchMode: 'result' });
    this.doSearch();
  },

  doSearch() {
    // 收集所有筛选条件
    const filterData = this.data.filterData;
    const params = {
      keyword: this.data.keyword,
      filters: {}
    };

    filterData.groups.forEach(group => {
      const selected = group.options.find(o => o.selected && o.value !== '');
      if (selected) {
        params.filters[group.key] = selected.value;
      }
    });

    console.log('Searching with params:', params);
    
    // 模拟网络请求延迟和结果更新
    wx.showLoading({ title: '加载中...', mask: true });
    setTimeout(() => {
      wx.hideLoading();
      this.setData({
        totalCount: Math.floor(Math.random() * 450) + 50
      });
    }, 300);
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/tutor-detail/tutor-detail?id=${id}`
    });
  }
})