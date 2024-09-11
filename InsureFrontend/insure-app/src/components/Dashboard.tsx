import Navbar from "./Navbar";

function Dashboard() {
    return (
        <div className="homepage" >
            <div className="navbar">
                <Navbar />
            </div>

            <div className="Dashbody">
                <p>
                    <h1>Welcome to your dashboard</h1>
                </p>
            </div>

        </div>


    );
}

export default Dashboard;
