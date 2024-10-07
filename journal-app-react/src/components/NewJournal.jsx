import React, { useState } from "react";
import { createJournal } from "../services/journalServices";

const NewJournal = ({ setJournalAdded }) => {
  const [journalDetails, setJournalDetails] = useState({
    title: "",
    content: "",
  });

  const userName = localStorage.getItem("userName");

  const handleInputChange = (e) => {
    e.preventDefault();
    setJournalDetails({ ...journalDetails, [e.target.id]: e.target.value });
  };

  const handleNewJournal = async (e) => {
    e.preventDefault();

    const newJournal = {
      title: journalDetails.title,
      content: journalDetails.content,
    };

    try {
      const response = await createJournal(newJournal, userName);
      console.log("Journal created successfully:", response);
      setJournalDetails({ title: "", content: "" });
      setJournalAdded((prev) => !prev);
    } catch (error) {
      console.error("Error creating journal:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg flex flex-col self-center p-3 rounded-xl justify-center w-full md:w-3/4 sm:w-4/5 bg-slate ">
      <p className="text-lg font-semibold italic text-center mb-3">
        Add New Journal
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2 w-full">
          <input
            className="border-2 rounded-lg border-slate-200 w-1/2 transition font-semibold capitalize sm:text-lg hover:shadow-xl pb-2 px-3 text-base"
            value={journalDetails.title}
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
            id="title"
          />

          <button
            onClick={handleNewJournal}
            className="rounded bg-indigo-600 py-2 px-8 sm:py-3 text-sm font-medium text-white transition hover:scale-105 sm:text-lg hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          >
            New
          </button>
        </div>
        <div className="flex justify-around">
          <textarea
            value={journalDetails.content}
            onChange={handleInputChange}
            className="border-2 rounded-lg italic px-3 w-full  border-slate-200 transition hover:shadow-xl text-base sm:text-lg"
            placeholder="Content"
            id="content"
          />
        </div>
      </div>
    </div>
  );
};

export default NewJournal;
