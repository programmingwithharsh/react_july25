function Spinner() {
    return <><div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
        <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </>
}

export default Spinner;