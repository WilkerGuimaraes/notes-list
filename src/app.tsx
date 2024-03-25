import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content: "Hello World!",
};

export const App = () => {
  return (
    <div className="max-w-6xl my-12 mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Lista de notas</h1>
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em sua notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard note={note} />
      </div>
    </div>
  );
};
