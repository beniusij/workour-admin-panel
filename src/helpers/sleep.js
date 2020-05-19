/**
 * Work In Progress
 * @param ms
 * @returns {Promise<any>}
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}