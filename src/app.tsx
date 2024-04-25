import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
import { toast } from "sonner";

interface Note {
  id: string;
  createdAt: Date;
  content: string;
}

export const App = () => {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:3333/notes");
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onNoteCreated = async (content: string) => {
    try {
      await axios.post("http://localhost:3333/notes", {
        content,
      });

      await fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const onNoteDeleted = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3333/notes/${id}`);

      toast.success("Nota apagada com sucesso!");

      await fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    setSearch(query);
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((notes) =>
          notes.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="max-w-6xl my-12 mx-auto space-y-6 px-5">
      <h1 className="text-3xl font-bold">Lista de notas</h1>
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em sua notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
        ))}
      </div>
    </div>
  );
};
