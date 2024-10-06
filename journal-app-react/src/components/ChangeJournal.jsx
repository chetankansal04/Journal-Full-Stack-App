import React from "react";
import JournalCard from "./JournalCard";

const handleDeleteJournal = () => {
  console.log("Delete journal");
}
const handleEditJournal = () => {
  console.log("Edit journal");
}

const ChangeJournal = () => {
  return (
    <JournalCard
    ></JournalCard>
  );
};

export default ChangeJournal;
