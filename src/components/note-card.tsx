export const NoteCard = () => {
  return (
    <div className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-200">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        pariatur et vero, consequatur doloribus quo voluptatem excepturi dolorum
        sit quas quasi, culpa optio tenetur similique possimus libero molestiae
        consequuntur beatae? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Illum, ad quos corrupti debitis amet vero excepturi provident quas
        animi labore repellendus. Ea dolorem sapiente autem, adipisci quam
        assumenda id similique.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
};
