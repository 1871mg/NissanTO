export const calcTotalPriceFullService = (duration, components, services, fullServiceComponents) => {
  const fuulServiceComponentsCost = fullServiceComponents.reduce((acc, cur) => acc + Number(cur.price), 0)
  const fullServiceCost = (Number(duration) * 2200) + fuulServiceComponentsCost;

  const additionalItemsCost = [...components, ...services].reduce((acc, cur) => acc + Number(cur.price), 0);
  const total = fullServiceCost + additionalItemsCost;
  return {
    fullServiceCost,
    additionalItemsCost,
    total,
   }
}
