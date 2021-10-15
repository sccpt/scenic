'use strict';
/*
 * @Author: yurui
 * @Date: 2021-05-06
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ArticleType = app.model.define('article_types', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    userId: {
      allowNull: false,
      type: INTEGER,
      comment: '用户id'
    },
    title: {
      allowNull: false,
      type: STRING,
      comment: '名称'
    },
    pid: {
      allowNull: true,
      type: INTEGER,
      comment: '父id'
    },
    orderNum: {
      allowNull: false,
      type: INTEGER,
      comment: '显示排序'
    },
    remark: {
      allowNull: true,
      type: STRING,
      comment: '备注'
    },
    isNav: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 1,
      comment: '是否导航显示'
    },
    isArt: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
      comment: '是否导航栏二级显示文章列表'
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

  return ArticleType;
};
