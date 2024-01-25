// app/api/categories.js
'use server'
import fs from 'fs';
import path from 'path';

const dataFilePath = './data/Category.json';

export const SaveCategoriesData = async (categories) => {
  try {
    await fs.writeFile(path.join(process.cwd(), dataFilePath), JSON.stringify(categories, null, 2));
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
