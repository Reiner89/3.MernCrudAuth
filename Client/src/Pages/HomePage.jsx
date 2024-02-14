import { Sidebar } from "../Layout/Sidebar";

export const HomePage = () => {
  return (
    <Sidebar
      children={
        <>
          <h1>Welcome to the home page!</h1>
        </>
      }
    />
  );
};
