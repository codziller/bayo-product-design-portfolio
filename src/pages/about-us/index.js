import DashboardLayout from "components/layout";
import HomeList from "./features";

const HomePage = () => {
  return (
    <div>
      <DashboardLayout>
        <HomeList />
      </DashboardLayout>
    </div>
  );
};

export default HomePage;
