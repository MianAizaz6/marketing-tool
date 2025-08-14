type KeywordInputProps = {
  keywords: string[];
  input: string;
  setInput: (value: string) => void;
  onAddKeyword: (keyword: string) => void;
  onRemoveKeyword: (keyword: string) => void;
  onTogglePredefined: (keyword: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  predefinedKeywords: string[];
};

export default function KeywordInput({
  keywords,
  input,
  setInput,
  onRemoveKeyword,
  onTogglePredefined,
  onKeyDown,
  onSubmit,
  predefinedKeywords,
}: KeywordInputProps) {
  return (
    <div className="space-y-4 flex flex-col justify-between h-full">
      <div>
        <label className="block font-medium mb-2">Enter or select relevant keywords</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {k}
              <button
                onClick={() => onRemoveKeyword(k)}
                className="text-orange-600 hover:text-red-700 text-xs font-bold"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Type keyword and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>

      <div>
        <p className="font-medium mb-2">Suggested Keywords</p>
        <div className="flex flex-wrap gap-2">
          {predefinedKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => onTogglePredefined(keyword)}
              className={`px-3 py-1 rounded-full border text-sm ${keywords.includes(keyword)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
                } hover:shadow`}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-right">
        <button
          onClick={onSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Submit Keywords
        </button>
      </div>
    </div>
  );
}
