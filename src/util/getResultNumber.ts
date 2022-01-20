export default function getResultNumber(): string | null {
	const resultNumber = location.pathname.split('/')[2];
	return resultNumber;
}
