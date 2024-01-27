'use client'
// app/pages/ProductForm.tsx
import { SaveProductData, LoadProductData } from '@/api/Products';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {  LoadCategoriesData } from '@/api/categories';
import {  LoadSubCategoriesData } from '@/api/SubCategories';
import { Category } from './CategoryForm';
import { SubCategory } from './SubCategoryForm';
import { Product } from '@/api/Products';


const ProductForm = (): JSX.Element => {
  const [productName, setProductName] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [productSubCategory, setProductSubCategory] = useState<string>('');
  const [productShortDesc, setProductShortDesc] = useState<string>('');
  const [productLongDesc, setProductLongDesc] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productImageUrl, setProductImageUrl] = useState<string>('');
  const [productStatus, setProductStatus] = useState<boolean>(false);
  const [productImageFile, setProductImageFile] = useState<File | null>(null);


  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const categoriesData = await LoadCategoriesData();
        setCategories(categoriesData);

        const subCategoriesData = await LoadSubCategoriesData();
        setSubCategories(subCategoriesData);

        const productsData = await LoadProductData();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddProduct = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
  
    const newProduct: Product = {
      id: products.length + 1,
      name: productName,
      category: productCategory,
      subCategory: productSubCategory,
      slug: productName.toLowerCase().replace(/\s+/g, '-'),
      shortDesc: productShortDesc,
      longDesc: productLongDesc,
      price: productPrice,
      imageUrl: productImageFile ? `/public/products/${productName.toLowerCase().replace(/\s+/g, '-')}.jpg` : '',
      status: productStatus,
    };
  
    // Update state with the new product
    setProducts([...products, newProduct]);
  
    // Save products to JSON file on the server
    await SaveProductData([...products, newProduct]);
  
    // Save product image to the public folder
    if (productImageFile) {
      const formData = new FormData();
      formData.append('image', productImageFile, `${newProduct.slug}.jpg`);
      
      // Assuming you have an API endpoint for uploading images
      await fetch('/api/uploadProductImage', {
        method: 'POST',
        body: formData,
      });
    }
  
    // Clear the input fields
    setProductName('');
    setProductCategory('');
    setProductSubCategory('');
    setProductShortDesc('');
    setProductLongDesc('');
    setProductPrice(0);
    setProductImageUrl('');
    setProductStatus(false);
    setProductImageFile(null);
  };

  const handleUpdateProduct = async (productId: number): Promise<void> => {
    // Placeholder logic, update based on your actual requirements
    alert(`Update product with id ${productId}`);
  };

  const handleRemoveProduct = async (productId: number): Promise<void> => {
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update state with the updated products
    setProducts(updatedProducts);

    // Save updated products to JSON file on the server
    await SaveProductData(updatedProducts);
  };

  const handleSaveChanges = async (): Promise<void> => {
    // Save products to JSON file on the server
    await SaveProductData(products);
  };

  return (
    <div>
      <button
        onClick={handleSaveChanges}
        className="absolute right-4 bg-green-500 text-white p-2 rounded"
      >
        Save Changes
      </button>

      <form onSubmit={handleAddProduct} className="mb-4">
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setProductName(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <label className="ml-2">
          Select Category:
          <select
            value={productCategory}
            onChange={(e: ChangeEvent<HTMLSelectElement>): void => setProductCategory(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          >
            <option value="" disabled>
              Choose a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="ml-2">
          Select SubCategory:
          <select
            value={productSubCategory}
            onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
              setProductSubCategory(e.target.value)
            }
            className="ml-2 p-2 border rounded"
            required
          >
            <option value="" disabled>
              Choose a subcategory
            </option>
            {subCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.name}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </label>

        <label className="ml-2">
          Short Description:
          <input
            type="text"
            value={productShortDesc}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setProductShortDesc(e.target.value)
            }
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <label className="ml-2">
          Long Description:
          <textarea
            value={productLongDesc}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
              setProductLongDesc(e.target.value)
            }
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <label className="ml-2">
          Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setProductPrice(parseFloat(e.target.value))
            }
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <label className="ml-2">
  Product Image:
  <input
    type="file"
    accept="image/*"
    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files && e.target.files[0];
      setProductImageFile(file);
    }}
    className="ml-2 p-2 border rounded"
    required
  />
</label>
        <label className="ml-2">
          Image URL:
          <input
            type="text"
            value={productImageUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setProductImageUrl(e.target.value)
            }
            className="ml-2 p-2 border rounded"
            required
          />
        </label>
        <label className="ml-2">
          Status:
          <input
            type="checkbox"
            checked={productStatus}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setProductStatus(e.target.checked)
            }
            className="ml-2 p-2 border rounded"
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>

      {products.length > 0 && (
        <div>
          <h2>Added Products:</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.slug} - {product.status}
                <button
                  onClick={(): Promise<void> => handleUpdateProduct(product.id)}
                  className="ml-2 bg-yellow-500 text-white p-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={(): Promise<void> => handleRemoveProduct(product.id)}
                  className="ml-2 bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductForm;


