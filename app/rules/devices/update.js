'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

const rule = {
  name: [
    { required: true, message: 'name不能为空' }
  ],
  typeId: [
    { required: true, message: '类型不能为空' }
  ],
  roleIds: [
    { required: true, message: '角色不能为空' }
  ],
};

module.exports = rule;
