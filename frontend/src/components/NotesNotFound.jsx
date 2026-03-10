const NotesNotFound = () => {
  return (
    <div>
      <div className="text-center text-primary py-10">
        <h3 className="text-2xl font-semibold mb-4">No notes found</h3>
        <p className="text-base-content/70">
          It looks like you haven't created any notes yet. Click the button
          below to create your first note!
        </p>
        <a href="/create" className="btn btn-primary mt-6">
          Create Note
        </a>
      </div>
    </div>
  );
};

export default NotesNotFound;
