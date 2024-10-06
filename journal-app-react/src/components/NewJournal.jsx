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
    <div className="bg-white shadow-lg flex flex-col p-3 rounded-xl justify-center self-center bg-slate ">
      <p className="text-lg font-semibold italic text-center mb-3">
        Add New Journal
      </p>
      <div className="flex self-center gap-2">
        <input
          className="border-2 rounded-lg border-slate-200 w-1/2 transition hover:scale-105 sm:text-lg hover:shadow-xl py-2 px-3 sm:py-3 text-sm"
          value={journalDetails.title}
          onChange={handleInputChange}
          placeholder="Title"
          type="text"
          id="title"
        />
        <textarea
          value={journalDetails.content}
          onChange={handleInputChange}
          className=" border-2 rounded-lg px-3 py-2 sm:py-3 w-1/2 border-slate-200  transition hover:scale-105 hover:shadow-xl text-sm sm:text-lg"
          placeholder="Content"
          id="content"
        />
        <button
          onClick={handleNewJournal}
          className="rounded bg-indigo-600 py-2 px-8 sm:py-3 text-sm font-medium text-white transition hover:scale-105 sm:text-lg hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        >
          New
        </button>
      </div>
    </div>
  );
};

export default NewJournal;
