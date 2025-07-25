function SearchComponent({ value, onChange, placeholder = "Tìm kiếm..." }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
export default SearchComponent;
