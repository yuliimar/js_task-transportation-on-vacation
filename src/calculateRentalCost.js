/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 80;
  const THREE_DAY_THRESHOLD = 3;
  const SIX_DAY_THRESHOLD = 6;
  const WEEKLY_THRESHOLD = 7;

  const THREE_DAY_DISCOUNT_PRICE = 100;
  const SIX_DAY_DISCOUNT_PRICE = 220;
  const WEEKLY_DISCOUNT_PRICE = 230;

  if (days === THREE_DAY_THRESHOLD) {
    return THREE_DAY_DISCOUNT_PRICE;
  }

  if (days === SIX_DAY_THRESHOLD) {
    return SIX_DAY_DISCOUNT_PRICE;
  }

  if (days === WEEKLY_THRESHOLD) {
    return WEEKLY_DISCOUNT_PRICE;
  }

  if (days > WEEKLY_THRESHOLD) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    return weeks * WEEKLY_DISCOUNT_PRICE + calculateRentalCost(remainingDays);
  }

  if (days > SIX_DAY_THRESHOLD) {
    return WEEKLY_DISCOUNT_PRICE + (days - WEEKLY_THRESHOLD) * DAILY_RATE;
  }

  if (days > THREE_DAY_THRESHOLD) {
    return THREE_DAY_DISCOUNT_PRICE + (days - THREE_DAY_THRESHOLD) * DAILY_RATE;
  }

  return 80;
}

module.exports = calculateRentalCost;
