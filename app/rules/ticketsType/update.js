'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  name: [
    { required: true, message: '名称不能为空' }
  ],
  status: [
    { required: true, message: '状态不能为空' }
  ],
};

module.exports = rule;
