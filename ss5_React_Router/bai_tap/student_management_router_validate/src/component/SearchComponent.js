function SearchComponent({
  nameValue,
  onNameChange,
  classOptions = [],
  selectedClass,
  onClassChange,
  placeholder = "Search By Name..."
}) {
  return (
    <div style={{ margin: "10px 0" }}>
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={nameValue}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedClass}
            onChange={(e) => onClassChange(e.target.value)}
          >
            <option value="">-----------All-Classes-----------</option>
            {classOptions.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
