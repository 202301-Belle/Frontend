// pages/login/login.js
Page({
  data: {
    account: '',
    password: '',
    agreed: false
  },

  onAccountInput(e) {
    this.setData({ account: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  onAgreementChange(e) {
    this.setData({ agreed: e.detail.value.length > 0 });
  },

  onLogin() {
    if (!this.data.account) {
      wx.showToast({ title: '请输入账号', icon: 'none' });
      return;
    }
    if (!this.data.password) {
      wx.showToast({ title: '请输入密码', icon: 'none' });
      return;
    }
    if (!this.data.agreed) {
      wx.showToast({ title: '请先同意用户协议', icon: 'none' });
      return;
    }

    // Simulate login
    wx.showLoading({ title: '登录中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '登录成功' });
      // Navigate to home
      wx.switchTab({ url: '/pages/index/index' });
    }, 1500);
  },

  onSmsLogin() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  onForgotPassword() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  onWeChatLogin() {
    wx.showToast({ title: '微信登录开发中', icon: 'none' });
  },

  onQQLogin() {
    wx.showToast({ title: 'QQ登录开发中', icon: 'none' });
  }
})
