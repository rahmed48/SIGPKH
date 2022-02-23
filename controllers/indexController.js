const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const fs = require("fs-extra");
// const path = require("path");
// const bcrypt = require("bcrypt");
// const { timeStamp } = require("console");
// const moment = require("moment");
// const sharp = require("sharp");
// const pdf = require("html-pdf");
// const md5 = require("md5");
// const options = {
//   height: "210mm", // allowed units: mm, cm, in, px
//   width: "330mm", // allowed units: mm, cm, in, px
// };

module.exports = {
  viewIndex: async (req, res, next) => {
    try {
      res.render("dashboard/viewDashboard", { title: "SIGPHK" });
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  },

  viewMasterData: async (req, res, next) => {
    try {
      const user = await prisma.$queryRaw`SELECT * FROM penerima`;
      res.render("masterData/viewMasterData", { title: "SIGPHK", user });
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  },
};
