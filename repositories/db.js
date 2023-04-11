import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://umndwiex:zRt-mNNgfheUMFti8hkeHZA2836OjIlo@suleiman.db.elephantsql.com/umndwiex",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
