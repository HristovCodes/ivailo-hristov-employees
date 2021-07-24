export default function getHighestPair(empl) {
  let pair = [];
  let highestDiff = 0;
  if (empl)
    empl.forEach((el1) => {
      // .slice() is used to exclude the current employee and employees before him
      // from the search which slightly reduces complexity. This is because
      // employee 5 + employee 13 is the same as emplyee 13 + employee 5
      empl.slice(empl.indexOf(el1) + 1, empl.length).forEach((el2) => {
        // get start and end date of each of employee
        const startDate1 = new Date(el1[2]);
        const endDate1 = el1[3] === "NULL" ? new Date() : new Date(el1[3]);
        const startDate2 = new Date(el2[2]);
        const endDate2 = el2[3] === "NULL" ? new Date() : new Date(el2[3]);

        if (startDate2 >= startDate1 && el1[1] === el2[1]) {
          const end = endDate1 <= endDate2 ? endDate1 : endDate2;
          if (end >= startDate2) {
            // diffTime is the time difference between the earliest end date and the oldest start date
            // of the two employees which gives us the time they worked on the project together
            // we convert it into days with the formula used for diffDays
            const diffTime = Math.abs(end - startDate2);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (highestDiff <= diffDays) {
              highestDiff = diffDays;
              pair = [el1[0], el2[0], el1[1], diffDays];
            }
          }
        }
      });
    });
  return pair;
}
