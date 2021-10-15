'use strict';
/*
 * @Author: yurui
 * @Date: 2021-09-22
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Seting = app.model.define('setings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    title: {
      allowNull: false,
      type: STRING,
      comment: '网站名称'
    },
    logo: {
      allowNull: false,
      type: STRING,
      comment: 'logo地址'
    },
    telephone: {
      allowNull: true,
      type: STRING,
      comment: '景区电话'
    },
    adress: {
      allowNull: true,
      type: STRING,
      comment: '景区地址'
    },
    keywords: {
      allowNull: true,
      type: STRING,
      comment: '搜索关键字'
    },
    description: {
      allowNull: true,
      type: TEXT,
      comment: '网站描述'
    },
    webStatus: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '网站状态（0停止，1正常）'
    },
    ticketsStatus: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '售票状态（0停止售票，1正常售票）'
    },
    ticketsLimit: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
      comment: '门票限购数量，0为不限制'
    },
    ticketsTime: {
      allowNull: false,
      type: INTEGER,
      comment: '可售多少天内的门票'
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

  return Seting;
};
