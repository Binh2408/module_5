function SearchComponent({
  searchName,
  setSearchName,
  categoryList = [],
  selectedCate,
  setSelectedCate,
  placeholder = "Search By Name...",
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) {
  return (
    <div style={{ margin: "10px 0" }}>
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCate}
            onChange={(e) => setSelectedCate(e.target.value)}
          >
            <option value="">-----------All-Category-----------</option>
            {categoryList.map((cate) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label>From: </label>
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label>To:</label>
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
