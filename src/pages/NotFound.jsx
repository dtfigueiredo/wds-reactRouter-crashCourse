import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/', { state: { message: 'Page not found Error' } });
		}, 1500);
	});

	return <h1>NotFound</h1>;
}
