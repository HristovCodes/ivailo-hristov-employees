export default function getHighestPair(empl) {
  let pairs = {};
  if (empl)
    empl.forEach((el1) => {
      /*
        .slice() is used to exclude the current employee and employees before him
        from the search which slightly reduces complexity. This is because
        employee 5 + employee 13 is the same as employee 13 + employee 5
      */
      empl.slice(empl.indexOf(el1) + 1, empl.length).forEach((el2) => {
        if (el1[0] !== el2[0] && el1[1] === el2[1]) {
          const x = `${el1[0]}${el2[0]}`;
          const commonDays = checkCommonDays(el1, el2);

          if (commonDays > 0) {
            if (!pairs[x])
              Object.assign(pairs, { [x]: { team: [], daysSum: 0 } });

            pairs[x] = {
              team: [...pairs[x].team, [el1[0], el2[0], el1[1], commonDays]],
              daysSum: 1 * pairs[x].daysSum + commonDays,
            };
          }
        }
      });
    });
  /*
    gets the key of the pair that have worked together the longest toghether 
    by using the reduce method and comparing the daysSum values.
    this is required because there's no way to sort object in javascript
    best thing we can do is turn it into an array and sort it but that's unnecesary
    if we can just find the highest daysSum and get the key for it
  */
  return pairs[
    Object.keys(pairs).reduce((a, b) =>
      pairs[a].daysSum > pairs[b].daysSum ? a : b
    )
  ];
}

function checkCommonDays(el1, el2) {
  // get start and end date of each of employee
  const startDate1 = new Date(el1[2]);
  const endDate1 = el1[3] === "NULL" ? new Date() : new Date(el1[3]);
  const startDate2 = new Date(el2[2]);
  const endDate2 = el2[3] === "NULL" ? new Date() : new Date(el2[3]);

  // this makes sure there's overlap
  if (startDate1 <= endDate2 && startDate2 <= endDate1) {
    // calculate the start and end day that we need
    const start = startDate1 <= startDate2 ? startDate2 : startDate1;
    const end = endDate1 <= endDate2 ? endDate1 : endDate2;
    if (end >= startDate2) {
      // put them inside this formula and we get the time they have worked together in days
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
    }
  }

  return 0;
}
