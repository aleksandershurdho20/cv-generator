import moment from "moment"
export const getDataByDateAndMonth = (data) =>{
    return data.map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");

        return { date, count };
      })
      .reverse();

}