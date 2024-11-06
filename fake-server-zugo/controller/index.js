const db = require("../database");

const getSchool = (req, res) => {
  let school = db.school;
  const { country, region, page } = req.query;

  try {
    if (country !== "null") {
      school = school.filter((sch) => sch.country === country);
    }

    if (region !== "null") {
      school = school.filter((sch) => sch.region === region);
    }

    const start = (page - 1) * 12;
    const end = start + 12;

    school = school.slice(start, end);

    res.status(200).json({
      message: "get school 성공",
      school,
    });
  } catch (error) {
    res.status(400).json({
      message: "get school 실패",
      error,
    });
  }
};

module.exports = { getSchool };
