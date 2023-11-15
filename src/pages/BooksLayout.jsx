import { Link, Outlet, useSearchParams } from 'react-router-dom';

export function BooksLayout() {
	const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
	const number = Number(searchParams.get('n'));

	return (
		<div>
			<nav style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
				<Link to='/books/1'>Book 1</Link>
				<Link to='/books/2'>Book 2</Link>
				<Link to={`/books/${number}`}>Book {number}</Link>
				<Link to='/books/new'>New Book</Link>
			</nav>
			<Outlet context={{ message: 'context' }} />

			<input
				type='number'
				value={number}
				onChange={(e) => setSearchParams({ n: e.target.value })}
			/>
		</div>
	);
}
