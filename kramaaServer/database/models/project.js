'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    uniqueId:{
      allowNull:false,
      primaryKey: true,
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subIndustry: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tokenName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokenSymbol: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tokenContractCode: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    tokenContractBytecode: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    tokenContractABI: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    tokenContractAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tokenContractTxHash: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
}, {});
  project.associate = function (models) {

  };
  return project;
};
