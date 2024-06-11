import React, { useState } from "react";

const ComplianceForm = () => {
  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Full Name:", fullName);
    console.log("Institution:", institution);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Files:", files);
    // Reset form fields
    setFullName("");
    setInstitution("");
    setPhone("");
    setEmail("");
    setCategory("");
    setTitle("");
    setDescription("");
    setFiles([]);
  };

  return (
    <div className="mx-auto mt-8 max-w-5xl full rounded-md bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">የቅሬታ ማቅረቢያ ቅጽ</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex justify-between gap-4">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-lg font-medium text-gray-800"
          >
          ሙሉ ስም
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="institution"
            className="block text-lg font-medium text-gray-800"
          >
           የጠያቂው ሰራተኛ  ተቋም
          </label>
          <input
            type="text"
            id="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-800"
          >
     ስልክ ቁጥር
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-800"
          >
          የኢሜል አድራሻ
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        </div>
        <div className="md:flex justify-between gap-4">
 

 
     
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-800"
          >
     የቅሬታ አይነት
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          >
            <option value="" disabled>   የቅሬታ አይነት ይምረጡ</option>
            <option value="Service">የቅጥር</option>
            <option value="Product">የምደባ</option>
            <option value="Staff">የደምወዝ</option>
            <option value="Other">የጥቅማጥቅም</option>
            <option value="Other">የደረጃ እድገት</option>
            <option value="Other">የዝውውር</option>
            <option value="Other">የዲሲፕሊን እርምጃ ውሳኔ</option>
          </select>
        </div>


        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-800"
          >
       ቅሬታው የተፈጸመበት ቀን
          </label>
          <input
            type="date"
            id="complainEventDate"
            value=""
            onChange={()=>{}}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-800"
          >
        የፈጸመው መስሪያ ቤት
          </label>
          <input
            type="text"
            id="complaintSourceInstitution"
            value=""
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>

        </div>
     
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-800"
          >
የቅሬታው ርእስ
          </label>
          <input
            type="text"
            id="complaintSourceInstitution"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-800"
          >
የቅሬታው ጭብጥ ባጭሩ
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-800"
          >
እንዲደረግልዎት የሚፈልጉን በአጭሩ
          </label>
          <textarea
            id="description"
            value=""
            onChange={(e) => {}}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="files"
            className="block text-lg font-medium text-gray-800"
          >
          ተያያዥ መረጃዎችን ያያይዙ
          </label>
          <input
            type="file"
            id="files"
            onChange={handleFileChange}
            multiple
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none"
        >
  አስቀምጥ
        </button>
      </form>
    </div>
  );
};

export default ComplianceForm;
