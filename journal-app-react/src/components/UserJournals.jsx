import { useEffect, useState } from "react";
import JournalCard from "./JournalCard";
import { useNavigate } from "react-router";
import { deleteJournal, getAllJournals } from "../services/journalServices";
import NewJournal from "./NewJournal";
import EditJournal from "./EditJournal";

const UserJournals = () => {
  const [journals, setJournals] = useState([]);
  const [journalAdded, setJournalAdded] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State to manage the edit modal visibility
  const [selectedJournal, setSelectedJournal] = useState(null); // State to hold selected journal details

  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();

  const journalResponse = async (userName) => {
    try {
      const response = await getAllJournals(userName);
        setJournals(response);
    } catch (error) {
      console.error("Error fetching journals:", error);
      alert("Error fetching journals. Please try again.");
    }
  };

  useEffect(() => {
    // Assuming userName is stored in localStorage
    journalResponse(userName);
  }, [navigate, journalAdded]);

  const handleDeleteJournal = async (id) => {
    if (window.confirm("Are you sure you want to delete this journal?")) {
      try {
        await deleteJournal(id);
        console.log("Journal deleted with id:", id);
        setJournalAdded((prev) => !prev);
      } catch (error) {
        console.error("Error deleting journal:", error);
      }
    }
  };

  const handleEditJournal = (id, title, content) => {
    setSelectedJournal({ id, title, content }); // Open the edit mode
    setIsEditing(true); //
  };

  const closeEditModal = () => {
    setIsEditing(false); // Close the edit modal
    setSelectedJournal(null); // Clear selected journal
  };

  return (
    <div className="flex flex-col min-h-max mx-10">
      {isEditing && (
        <EditJournal
        journal={selectedJournal}
        closeModal={closeEditModal}
        setJournalAdded={setJournalAdded} 
        ></EditJournal>
      )}
      <div className="flex justify-center mb-10">
        <NewJournal setJournalAdded={setJournalAdded}></NewJournal>
      </div>
      {journals.length > 0 &&
      <div className="flex flex-col p-3 self-center bg-white shadow-lg rounded-xl md:w-3/4 sm:w-4/5 ">
        <p className="text-lg font-semibold italic text-center mb-2">
          Your Journals
        </p>
        <div className="w-full journal-list flex flex-wrap justify-center">
          {journals?.map((journal) => (
            <JournalCard
              key={journal.date}
              id={journal.id}
              title={journal.title}
              content={journal.content}
              date={new Date(journal.date).toLocaleDateString()}
              editJournal={handleEditJournal}
              deleteJournal={handleDeleteJournal}
            />
          ))}
        </div>
      </div>
      }
      
    </div>
  );
};

export default UserJournals;
