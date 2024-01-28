'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

function Page() {
  const [file, setFile] = useState<File | undefined>();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(file);

    const data = new FormData();
    if (file) {
      data.set('file', file);
      const result = await fetch('api/upload/', {
        method: 'POST',
        body: data,
      });
      console.log(result);
    }
  };

  return (
    <div>
      <div>upload image</div>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFile(event.target.files?.[0])
          }
        />
        <button type="submit" className="bg-green-500 py-2 px-3">
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default Page;
