/**
 * Mocks a delay in API function calls
 *
 * @param ms The delay duration in milliseconds
 * @see https://stackoverflow.com/a/65549079
 * @returns A Promise that resolves after the delay duration
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
