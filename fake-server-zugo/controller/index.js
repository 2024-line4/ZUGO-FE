const db = require("../database");

const getSchool = (req, res) => {
  let schools = db.schools;
  const { country, region, page } = req.query;

  try {
    if (country !== "") {
      schools = schools.filter((sch) => sch.country === country);
    }

    if (region !== "") {
      schools = schools.filter((sch) => sch.region === region);
    }

    const totalData = schools.length;

    const start = (page - 1) * 12;
    const end = start + 12;

    schools = schools.slice(start, end);

    res.status(200).json({
      schools,
      totalData,
    });
  } catch (error) {
    res.status(400).json({
      message: "get school 실패",
      error,
    });
  }
};

const getDormitory = (req, res) => {
  let dormitory = db.dormitory;

  try {
    const { country, region, page } = req.query;

    if (country !== "") {
      dormitory = dormitory.filter((dor) => dor.country === country);
    }

    if (region !== "") {
      dormitory = dormitory.filter((dor) => dor.region === region);
    }

    const totalData = dormitory.length;

    const start = (page - 1) * 12;
    const end = start + 12;

    dormitory = dormitory.slice(start, end);

    res.status(200).json({
      message: "get dormitory 성공",
      dormitory,
      totalData,
    });
  } catch (error) {
    res.status(400).json({
      message: "get dormitory 실패",
      error,
    });
  }
};

const getSchoolSearch = (req, res) => {
  let schools = db.schools;

  try {
    const { query } = req.query;
    // schools = schools.filter((sch) => sch.id.includes(query));

    schools = schools.map((e) => ({
      id: e.id,
      img_url: e.img,
    }));

    res.status(200).json({
      result: schools,
    });
  } catch (error) {
    res.status(400).json({
      message: "검색 실패",
      error,
    });
  }
};

const getDormSearch = (req, res) => {
  let dormitory = db.dormitory;

  try {
    const { query } = req.query;
    dormitory = dormitory.filter((dorm) => dorm.id.includes(query));
    dormitory = dormitory.map((e) => ({
      id: e.id,
      img_url: e.img,
    }));

    res.status(200).json({
      result: dormitory,
    });
  } catch (error) {
    res.status(400).json({
      message: "검색 실패",
      error,
    });
  }
};

module.exports = { getSchool, getDormitory, getSchoolSearch, getDormSearch };
