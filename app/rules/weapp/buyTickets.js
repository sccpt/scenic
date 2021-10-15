'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */

const rule = {
  id: [
    { required: true, message: '门票id不能为空' }
  ],
  time: [
    { required: true, message: '入园时间不能为空' }
  ],
  num: [
    { required: true, message: '购票数量不能为空' }
  ],
  peoples: [
    { required: true, message: '出行人员不能为空' }
  ],
  people: [
    { required: true, message: '预定人不能为空' }
  ],
  mobile: [
    { required: true, message: '预定人手机号不能为空' }
  ],
};

module.exports = rule;
