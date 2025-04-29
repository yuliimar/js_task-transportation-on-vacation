/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 80;
  const THREE_DAY_DISCOUNT = 100;
  const SIX_DAY_DISCOUNT = 220;
  const WEEKLY_DISCOUNT = 230;

  if (days === 3) {
    return THREE_DAY_DISCOUNT;
  }

  if (days === 6) {
    return SIX_DAY_DISCOUNT;
  }

  if (days === 7) {
    return WEEKLY_DISCOUNT;
  }

  return DAILY_RATE;
}

module.exports = calculateRentalCost;
