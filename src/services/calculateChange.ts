/*
 * Complete the 'getDenominations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts FLOAT amount as parameter.
 */

export function getDenominations(amount: number) {
	const coins = [200, 100, 50, 20, 10, 5, 2, 1];
	const result = [0, 0, 0, 0, 0, 0, 0, 0];

	console.log(`Amount: ${Math.floor(amount * 100)}`);

	coins.reduce((remainder, coin, index) => {
		if (remainder > 0) {
			let coinCount = Math.floor(remainder / coin);
			result[index] = coinCount;
			console.log(`Remainder: ${remainder}, coin: ${coin}, index: ${index}, coinCount: ${coinCount}`);
			return remainder - coin * coinCount;
		}
		return remainder;
	}, amount * 100);

	return result;
}
