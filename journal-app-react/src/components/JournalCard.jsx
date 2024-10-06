import React from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const JournalCard = ({
  id,
  title,
  content,
  date,
  deleteJournal,
  editJournal,
}) => {
  return (
    <div className="flex justify-between border-solid border-2 shadow-sm rounded-xl m-1 p-2">
      <div className="flex-col p-2">
        <h2 className="text-xl font-semibold capitalize">{title}</h2>
        <p className="text-base text-wrap mb-1 md:min-w-32 min-w-12">
          {content}
        </p>
        <p className="text-sm font-mono">{date}</p>
      </div>
      <div className="flex flex-col size-10 items-end gap-3">
        <button onClick={() => deleteJournal(id)}>
          <MdOutlineDeleteOutline className="size-8 rounded-full border p-1 transition hover:scale-110 hover:bg-red-400" />
        </button>
        <button onClick={() => editJournal(id,title,content)}>
          <MdOutlineEdit className="flex size-8 rounded-full border p-1 transition hover:scale-110 hover:bg-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default JournalCard;
