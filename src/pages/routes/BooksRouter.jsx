import { Route, Routes } from 'react-router-dom';
import { Book } from '../Book';
import { Books } from '../Books';
import { BooksLayout } from '../BooksLayout';
import { NewBook } from '../NewBook';

export function BooksRouter() {
	return (
		<>
			<Routes>
				<Route element={<BooksLayout />}>
					<Route
						index
						element={<Books />}
					/>
					<Route
						path=':id'
						element={<Book />}
					/>
					<Route
						path='new'
						element={<NewBook />}
					/>
				</Route>
			</Routes>
		</>
	);
}
