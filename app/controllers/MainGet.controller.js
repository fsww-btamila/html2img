const Models = require("../models/MainGet.model.js");
const { request } = require("express");

module.exports.htmltoimage = async (request, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const result = await Models.htmltoimage(request.query);
    return res.json(result.recordsets[0]);
  }
  catch (err) {
    return res.json(err);
  }
};

