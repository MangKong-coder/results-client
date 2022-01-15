export default function getResultId(): string | null {
	const resultId = location.pathname.split('/')[2];
	return resultId;
}
