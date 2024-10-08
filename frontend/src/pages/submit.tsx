import { useState } from "react";

export default function SubmitArticle() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    journel: "",
    yearOfPub: "",
    volume: "",
    numberOfPages: "",
    doi: "",
    email: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
    // Submit the form data to the API
    const response = await fetch("http://localhost:8082/articles/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    
    
    if (response.ok) {
      alert("Article submitted successfully!");
    } else {
      alert("Error submitting article!");
    }
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded">
      <h1 className="text-2xl font-bold mb-4">Submit an Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="journel">Journel</label>
          <input
            type="journel"
            id="journel"
            name="journel"
            value={formData.journel}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="yearOfPub">Year of Publication</label>
          <input
            type="yearOfPub"
            id="yearOfPub"
            name="yearOfPub"
            value={formData.yearOfPub}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="volume">Volume</label>
          <input
            type="volume"
            id="volume"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="numberOfPages">Number of Pages</label>
          <input
            type="numberOfPages"
            id="numberOfPages"
            name="numberOfPages"
            value={formData.numberOfPages}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="doi">DOI</label>
          <input
            type="doi"
            id="doi"
            name="doi"
            value={formData.doi}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

