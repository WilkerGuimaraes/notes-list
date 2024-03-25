import { NoteCard } from "./components/note-card";

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
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};
