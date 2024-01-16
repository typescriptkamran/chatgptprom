import { promises as fs } from 'fs';

async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/data/data.json', 'utf8');
  const Data = JSON.parse(file);

  return (
    <div>
      <h1>{Data.title}</h1>
      <p>{Data.content}</p>
    </div>
  );
}

export default Page

