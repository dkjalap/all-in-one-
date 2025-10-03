import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // for animation

function Dashboard() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/api/all_user");
        const data = await response.json();
        if (response.ok) {
          setUsers(data || []);
          console.log(data)
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  function handleLogout(){
    
  }  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        📊 Dashboard
        <button
  onClick={handleLogout}
  className="absolute top-6 right-6 px-1 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
>
  Logout
</button>

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - All Users */}
        <motion.div
          className="bg-white rounded-10xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-600">
            👥 All Users
          </h2>
          {users.length > 0 ? (
            <ul className="space-y-2">
              {users.map((user,i) => (
                <li
                  key={i}
                  className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
                >
                  <span className="font-medium">{user.name}</span> 
                 <span> </span>
                  <span className="font-medium">{user.mobile_Number}</span>
                  <span className="font-medium text-gray-500"> ({user.email})</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </motion.div>

        {/* Card 2 - Empty Placeholder */}
        {/* <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-gray-400 hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.03 }}
        >
          <p>📌 Empty Card</p>
        </motion.div>
 */}
        {/* Card 3 - Empty Placeholder */}
        {/* <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-gray-400 hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.03 }}
        >
          <p>📌 Empty Card</p>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Dashboard;
