// app/api/categories.js
'use server'
import fs from 'fs';
import path from 'path';
import { Category } from '@/components/CategoryForm';


const dataFilePath = './data/Category.json';

const saveCustomerData = (data: Customer[]) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('customerData.json', jsonData, 'utf-8');
}

export const SaveCategoriesData = async (categories: Category[]) => {
  try {
    const jsonData = JSON.stringify(categories, null, 2);
  fs.writeFileSync('CategoriesData.json', jsonData, 'utf-8');
    console.log('Categories data saved successfully.');
  } catch (error) {
    console.error('Error saving categories data:', error);
  }
};

export const LoadCategoriesData = async () => {
  try {
    const data = await fs.readFile(path.join(process.cwd(), dataFilePath), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    console.error('Error loading categories data:', error);
    throw error;
  }
};
