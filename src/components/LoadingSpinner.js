export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center gap-2">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
