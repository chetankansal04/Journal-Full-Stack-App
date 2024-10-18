import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="flex flex-col w-2/3 items-center self-center gap-3">
      <div className="">
        <h4 className="text-2xl text-center mb-2 font-bold">Welcome to Your Journal !</h4>
        <p className="text-base font-medium text-center">
        Discover a new way to capture and reflect on your thoughts with our
        intuitive journal entry website. Whether you're jotting down daily
        reflections, tracking your goals, or simply organizing your thoughts,
        our platform makes it easy and secure. Built with a seamless blend of
        Java Spring Boot and React, our website ensures a smooth and responsive
        experience. Enjoy robust backend features and a modern, user-friendly
        frontend that adapts to your needs. Start your journaling journey today
        and explore how easy it is to create, update, and manage your entries
        with our application !
        </p>
      </div>
      <Link to="/journal">
        <button className="mt-5 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
          Your Journals
        </button>
      </Link>
    </main>
  );
};
export default Home;
