export const calcTotalPriceFullService = (duration, components, services) => {
  const fullServiceCost = Number(duration) * 2200;
  const additionalItemsCost = [...components, ...services].reduce((acc, cur) => acc + Number(cur.price), 0);
  const total = fullServiceCost + additionalItemsCost;
  return {
    fullServiceCost,
    additionalItemsCost,
    total,
   }
}
