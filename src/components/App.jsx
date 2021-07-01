import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prev) => [...prev, newNote]);
	}

	function deleteNote(id) {
		setNotes((prev) => prev.filter((note, index) => index !== id));
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((note, index) => (
				<Note
					onDelete={deleteNote}
					key={index}
					title={note.title}
					content={note.content}
					id={index}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
