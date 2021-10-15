'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-13
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Devices = app.model.define('devices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '名称'
    },
    typeId: {
      allowNull: false,
      type: INTEGER,
      comment: '类型'
    },
    secret: {
      allowNull: false,
      type: STRING,
      comment: '密钥'
    },
    remark: {
      allowNull: true,
      type: STRING,
      comment: '备注'
    },
    createdAt: {
      allowNull: true,
      type: DATE,
      comment: '创建时间'
    },
    createdBy: {
      allowNull: true,
      type: STRING,
      comment: '创建者'
    },
    updatedAt: {
      allowNull: true,
      type: DATE,
      comment: '更新时间'
    },
    updatedBy: {
      allowNull: true,
      type: STRING,
      comment: '更新者'
    }
  });

  Devices.associate = function () {
    Devices.belongsTo(app.model.DevicesType, { foreignKey: 'typeId', targetKey: 'id', as: 'type' });
    Devices.belongsToMany(app.model.Roles, { through: 'devices_roles', foreignKey: 'deviceId', as: 'roles' });
  }

  return Devices;
};
