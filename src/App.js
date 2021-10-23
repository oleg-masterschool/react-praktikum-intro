function App(props) {
  const { course, cohort, instructor, beginner = false} = props;
  const coursePrefix = beginner ? 'Beginner' : 'Advanced';

  return (
    <div className="App">
      <article>
        <h1>Welcome to {coursePrefix} { course }!</h1>
        <p>This is cohort number { cohort }.</p>
        <p>Taught by instructor { instructor }.</p>
      </article>
    </div>
  );
}

export { App };
