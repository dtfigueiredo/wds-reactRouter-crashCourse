import { useOutletContext, useParams } from 'react-router-dom';

export function Book() {
	const { id } = useParams();
	const ctxObject = useOutletContext();
	return (
		<h1>
			Book {id} {ctxObject.message}
		</h1>
	);
}
