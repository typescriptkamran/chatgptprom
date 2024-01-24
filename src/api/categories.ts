'use server'
// pages/api/categories.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const categoriesFilePath = path.join(process.cwd(), 'data', 'categories.json');

const getCategories = (): any[] => {
  const categoriesData = fs.readFileSync(categoriesFilePath, 'utf-8');
  return JSON.parse(categoriesData);
};

export const saveCategories = (categories: any[]): void => {
  fs.writeFileSync(categoriesFilePath, JSON.stringify(categories));
};

export const SaveCategoriesData = (data: any[]) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('./data/Category.json', jsonData, 'utf-8');
  }


export default async function handler(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'GET') {
    const categories = getCategories();
    res.status(200).json(categories);
  } else if (req.method === 'POST') {
    const { body } = req;
    const categories = getCategories();
    saveCategories(body);
    res.status(200).json(body);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
