const db = require("../database");

const getSchool = (req, res) => {
  let school = db.school;
  // url에서 쿼리 파라미터 추출
  const { country, region, page } = req.query;

  try {
    // country가 없을 수도 있으니 if문
    // !!!쿼리 스트링으로 보내지기 때문에 NULL type이 아닌 string으로 보내집니다.
    if (country !== "null") {
      school = school.filter((sch) => sch.country === country);
    }

    // region의 필터가 있다면 do
    if (region !== "null") {
      school = school.filter((sch) => sch.region === region);
    }

    // 한 페이지 당 12개씩 보여줌
    // page는 인덱스를 기준으로 하기 때문에
    const start = (page - 1) * 12;
    const end = start + 12;

    // [0~11], [12~23] 이런 식으로 잘라집니다
    // ex) 페이지가 1페이지라면 0~12로 잘라짐
    // 스크롤을 끝까지 내리면 2페이지로 되고, 2페이지의 내용으로 다시 fetch
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
