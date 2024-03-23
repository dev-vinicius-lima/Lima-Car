import Container from "../../components/container";
import DashboardHeader from "../../components/panelHeader";
import { FiUpload } from "react-icons/fi";

const Dashboard = () => {
  return (
    <Container>
      <DashboardHeader />
      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button>
          <div>
            <FiUpload size={30} color="#000" />
          </div>
        </button>
      </div>
    </Container>
  );
};

export default Dashboard;
