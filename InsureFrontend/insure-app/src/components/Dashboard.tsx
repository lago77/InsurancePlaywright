import Navbar from "./Navbar";
import Cookies from 'js-cookie';

function Dashboard() {
    const userCookie = Cookies.get("myuser") || '';

    console.log("here");

    console.log(userCookie);
    const myUser = JSON.parse(userCookie);


    console.log(myUser['name']);
    myUser.name = "omar2";
    myUser.loggedin = true;

    Cookies.set('myuser', JSON.stringify(myUser), { expires: 2 });
    console.log(myUser['name']);
  
    type Policy= string;
    const myPolicies: Policy[] = myUser.policies;



    return (
        <div className="homepage" >
            <div className="navbar">
                <Navbar />
            </div>

            <div className="Dashbody">
                <p>
                    <h1>Welcome to your dashboard {myUser.name}</h1>
                </p>
            </div>

            
            <div className="Policies">
                <h3> Here are your policies</h3>
            <nav >
            <ul>
                

                {myPolicies.map((policy, index) => (
        <li key={index} className="policy-item">{policy}</li>
      ))}
  
                </ul> 

            </nav>
        </div>




        </div>


    );
}

export default Dashboard;
