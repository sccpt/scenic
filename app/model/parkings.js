'use strict';
/*
 * @Author: yurui
 * @Date: 2021-10-14
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Parkings = app.model.define('parkings', {
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
    space: {
      allowNull: false,
      type: INTEGER,
      comment: '停车场容量'
    },
    free: {
      allowNull: true,
      type: INTEGER,
      comment: '空闲车位数量'
    },
    fault: {
      allowNull: true,
      type: INTEGER,
      comment: '故障停车位数量',
      defaultValue: 0,
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

  Parkings.changeFree = async (id, type) => {
    const transaction = await app.model.transaction();
    try {
      const res = await Parkings.findOne({
        where: {
          id,
        },
        lock: transaction.LOCK.UPDATE,
      }, { transaction });
      if (res) {
        if (type === 'out') {
          const fRes = await Parkings.update({ free: res.free + 1 }, { where: { id }, transaction });
          await transaction.commit();
          return fRes;
        }
        if (type === 'in') {
          const fRes = await Parkings.update({ free: res.free - 1 }, { where: { id }, transaction });
          await transaction.commit();
          return fRes;
        }
      }
      await transaction.commit();
      return;
    } catch (error) {
      transaction.rollback();
    }
  };

  return Parkings;
};
