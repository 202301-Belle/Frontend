// pages/search/search.js
Page({
  data: {
    keyword: '',
    showFilter: false, // Control filter popup visibility
    filters: [
      { label: '计算机科学', value: 'cs', selected: false },
      { label: '电子工程', value: 'ee', selected: false },
      { label: '自动化', value: 'auto', selected: false },
      { label: '数学', value: 'math', selected: false },
      { label: '教授', value: 'prof', selected: false },
      { label: '副教授', value: 'assoc', selected: false },
      { label: '讲师', value: 'lec', selected: false },
      { label: '985高校', value: '985', selected: false },
      { label: '211高校', value: '211', selected: false },
      { label: '双一流', value: 'double', selected: false },
      { label: 'AI', value: 'ai', selected: false },
      { label: '大数据', value: 'bigdata', selected: false },
      { label: '物联网', value: 'iot', selected: false },
      { label: '区块链', value: 'blockchain', selected: false }
    ],
    // Filter popup options
    filterOptions: [
      {
        title: '热门专业',
        key: 'major',
        options: [
          { label: '计算机科学与技术', value: 'cs', selected: false },
          { label: '软件工程', value: 'se', selected: false },
          { label: '人工智能', value: 'ai', selected: false },
          { label: '电子信息工程', value: 'eie', selected: false },
          { label: '自动化', value: 'auto', selected: false },
          { label: '通信工程', value: 'ce', selected: false },
          { label: '数据科学', value: 'ds', selected: false },
          { label: '网络工程', value: 'ne', selected: false },
          { label: '机械工程', value: 'me', selected: false },
          { label: '电气工程', value: 'ee', selected: false },
          { label: '材料科学', value: 'ms', selected: false },
          { label: '化学工程', value: 'che', selected: false }
        ]
      },
      {
        title: '热门院校',
        key: 'school',
        options: [
          { label: '清华大学', value: 'tsinghua', selected: false },
          { label: '北京大学', value: 'pku', selected: false },
          { label: '浙江大学', value: 'zju', selected: false },
          { label: '上海交通大学', value: 'sjtu', selected: false },
          { label: '复旦大学', value: 'fudan', selected: false },
          { label: '中国科学技术大学', value: 'ustc', selected: false },
          { label: '南京大学', value: 'nju', selected: false },
          { label: '哈尔滨工业大学', value: 'hit', selected: false },
          { label: '西安交通大学', value: 'xjtu', selected: false },
          { label: '华中科技大学', value: 'hust', selected: false },
          { label: '武汉大学', value: 'whu', selected: false },
          { label: '同济大学', value: 'tongji', selected: false }
        ]
      },
      {
        title: '热门省市',
        key: 'city',
        options: [
          { label: '北京', value: 'beijing', selected: false },
          { label: '上海', value: 'shanghai', selected: false },
          { label: '广州', value: 'guangzhou', selected: false },
          { label: '深圳', value: 'shenzhen', selected: false },
          { label: '杭州', value: 'hangzhou', selected: false },
          { label: '南京', value: 'nanjing', selected: false },
          { label: '成都', value: 'chengdu', selected: false },
          { label: '武汉', value: 'wuhan', selected: false }
        ]
      }
    ],
    currentPage: 1,
    tutorList: [
      {
        id: 1,
        name: '张明华',
        avatar: '/images/tutor-zhang.png',
        school: '清华大学',
        department: '计算机科学与技术系',
        direction: '人工智能',
        desc: '发表顶级论文150+篇，主持国家重点研发计划3项',
        tags: ['985博导', '中国科学院院士']
      },
      {
        id: 2,
        name: '李晓芳',
        avatar: '/images/tutor-li.png',
        school: '北京大学',
        department: '信息科学技术学院',
        direction: '机器学习',
        desc: '获国家杰青，培养博士生30余名，就业率98%',
        titleTag: '信息科学技术学院院长'
      },
      {
        id: 3,
        name: '王建国',
        avatar: '/images/tutor-wang.png',
        school: '浙江大学',
        department: '控制科学与工程学院',
        direction: '智能控制',
        desc: '国际合作项目5项，专利授权40+件',
        titleTag: '控制科学与工程学院副院长'
      }
    ]
  },

  onLoad(options) {
    if (options.keyword) {
      this.setData({ keyword: options.keyword });
    }
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value });
  },

  onSearch() {
    // Implement search logic here
    wx.showToast({
      title: '搜索: ' + this.data.keyword,
      icon: 'none'
    });
  },

  onFilterTap(e) {
    const index = e.currentTarget.dataset.index;
    const filters = this.data.filters;
    // Multi-select: toggle current state
    filters[index].selected = !filters[index].selected;
    this.setData({ filters });
    
    // Log selected filters
    const selectedValues = filters.filter(f => f.selected).map(f => f.value);
    console.log('Selected filters:', selectedValues);
  },

  // Toggle filter popup
  toggleFilter() {
    this.setData({
      showFilter: !this.data.showFilter
    });
  },

  // Select option in filter popup
  selectFilterOption(e) {
    const sectionIndex = e.currentTarget.dataset.sectionIndex;
    const optionIndex = e.currentTarget.dataset.optionIndex;
    const filterOptions = this.data.filterOptions;
    
    filterOptions[sectionIndex].options[optionIndex].selected = !filterOptions[sectionIndex].options[optionIndex].selected;
    
    this.setData({ filterOptions });
  },

  // Reset all filters in popup
  resetFilter() {
    const filterOptions = this.data.filterOptions.map(section => {
      section.options = section.options.map(option => {
        option.selected = false;
        return option;
      });
      return section;
    });
    
    this.setData({ filterOptions });
  },

  // Apply filters and close popup
  applyFilter() {
    const selectedFilters = {};
    this.data.filterOptions.forEach(section => {
      const selected = section.options.filter(opt => opt.selected).map(opt => opt.value);
      if (selected.length > 0) {
        selectedFilters[section.key] = selected;
      }
    });
    
    console.log('Applied popup filters:', selectedFilters);
    this.toggleFilter();
    
    wx.showToast({
      title: '筛选已应用',
      icon: 'none'
    });
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/tutor-detail/tutor-detail?id=${id}`
    });
  },

  prevPage() {
    if (this.data.currentPage > 1) {
      this.setData({ currentPage: this.data.currentPage - 1 });
    }
  },

  nextPage() {
    this.setData({ currentPage: this.data.currentPage + 1 });
  },

  goToPage(e) {
    const page = parseInt(e.currentTarget.dataset.page);
    this.setData({ currentPage: page });
  }
})
