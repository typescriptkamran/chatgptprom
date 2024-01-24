'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Category {
  id: number;
  name: string;
  slug: string;
}

const CategoryForm = (): JSX.Element => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Load existing categories from JSON file
    const fetchData = async (): Promise<void> => {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);

  const handleAddCategory = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    // Create a new category object
    const newCategory: Category = {
      id: categories.length + 1,
      name: categoryName,
      slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
    };

    // Update state with the new category
    setCategories([...categories, newCategory]);

    // Save categories to JSON file
    await fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...categories, newCategory]),
    });

    // Clear the input field
    setCategoryName('');
  };

  const handleUpdateCategory = async (categoryId: number): Promise<void> => {
    // Placeholder logic, update based on your actual requirements
    alert(`Update category with id ${categoryId}`);
  };

  return (
    <div>
      <form onSubmit={handleAddCategory} className="mb-4">
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setCategoryName(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Category
        </button>
      </form>

      {categories.length > 0 && (
        <div>
          <h2>Added Categories:</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.name} - {category.slug}{' '}
                <button
                  onClick={(): Promise<void> => handleUpdateCategory(category.id)}
                  className="ml-2 bg-yellow-500 text-white p-2 rounded"
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryForm;
