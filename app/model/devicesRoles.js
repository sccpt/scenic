'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const DevicesRoles = app.model.define('devices_roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    deviceId: {
      allowNull: false,
      type: INTEGER,
      comment: '设备id'
    },
    roleId: {
      allowNull: false,
      type: INTEGER,
      comment: '角色id'
    }
  });

  return DevicesRoles;
};
