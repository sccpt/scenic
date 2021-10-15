'use strict';
/*
 * @Author: yurui
 * @Date: 2021-06-01
 */

const rule = {
  name: [
    { required: true, message: '名称不能为空' }
  ],
  type_id: [
    { required: true, message: '分类id不能为空' }
  ],
  price: [
    { required: true, message: '价格不能为空' }
  ],
  isTeam: [
    { required: true, message: '是否为团队票不能为空' }
  ]
};

module.exports = rule;
