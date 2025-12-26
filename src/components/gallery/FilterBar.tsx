'use client';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  categories: FilterOption[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
  showSort?: boolean;
  className?: string;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy = 'recent',
  onSortChange,
  showSort = false,
  className = '',
}: FilterBarProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-md ${className}`}>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Category Filter */}
        <div className="flex-1 w-full md:w-auto">
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        {showSort && onSortChange && (
          <div className="w-full md:w-auto">
            <label htmlFor="sort" className="block text-sm font-semibold text-neutral-700 mb-2">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border border-neutral-300 rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
