'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-14
 */

const rule = {
  name: [
    { required: true, message: '名称不能为空' }
  ],
  space: [
    { required: true, message: '容量不能为空' }
  ],
  fault: [
    { required: true, message: '故障车位不能为空' }
  ],
  free: [
    { required: true, message: '空闲车位不能为空' }
  ],
};

module.exports = rule;
