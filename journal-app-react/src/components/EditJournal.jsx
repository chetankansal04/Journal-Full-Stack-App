import React, { useState, useEffect } from "react";
import { updateJournal } from "../services/journalServices";

const EditJournal = ({ journal, setJournalAdded, closeModal }) => {
  const [journalDetails, setJournalDetails] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (journal) {
      setJournalDetails({ title: journal.title, content: journal.content });
    }
  }, [journal]);

  const handleInputChange = (e) => {
    setJournalDetails({ ...journalDetails, [e.target.id]: e.target.value });
  };

  const handleEditJournal = async (e) => {
    e.preventDefault();
    try {
      await updateJournal(journal.id, journalDetails); // Update journal with ID
      setJournalAdded((prev) => !prev); // Trigger a refresh of the journal list
      closeModal(); // Close the modal
      console.log("Journal is updated successfully with id", journal.id);
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white shadow-lg flex flex-col p-3 rounded-xl">
        <h2 className="text-lg font-semibold text-center mb-3">Edit Journal</h2>
        <form onSubmit={handleEditJournal}>
          <input
            type="text"
            id="title"
            value={journalDetails.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border-2 rounded-lg w-full py-2 px-3 mb-2"
          />
          <textarea
            id="content"
            value={journalDetails.content}
            onChange={handleInputChange}
            placeholder="Content"
            className="border-2 rounded-lg w-full py-2 px-3 mb-2"
          />

          <button
            type="submit"
            className="shadow-md rounded-md px-3 py-2 mr-4  bg-green-500 transition hover:bg-green-300"
          >
            Save
          </button>
          <button
            type="button"
            className="shadow-md rounded-md px-3 py-2 mr-4 mt-2 bg-red-500 transition hover:bg-red-300"
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJournal;
