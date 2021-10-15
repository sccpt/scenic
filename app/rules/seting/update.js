'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */

const rule = {
  title: [
    { required: true, message: '名称不能为空' }
  ],
  logo: [
    { required: true, message: 'logo地址不能为空' }
  ],
  webStatus: [
    { required: true, message: '网站状态不能为空' }
  ],
  ticketsStatus: [
    { required: true, message: '售票系统状态不能为空' }
  ],
  ticketsLimit: [
    { required: true, message: '售票限制不能为空' }
  ],
  ticketsTime: [
    { required: true, message: '售票时间不能为空' }
  ],
};

module.exports = rule;
