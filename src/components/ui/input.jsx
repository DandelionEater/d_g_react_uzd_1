export function Input({ value, onChange, placeholder }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-700 border rounded-lg px-4 py-2 w-full"
      />
    );
  }
  