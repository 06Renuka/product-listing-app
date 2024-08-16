import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfo = ({ authToken }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://intern-task-api.bravo68web.workers.dev/api/me', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserEmail(response.data.user.sub);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [authToken]);

  return (
    
      <div className="mb-4 text-black text-medium text-center font-semibold">
        Logged in as: <span>{userEmail}</span>
      </div>
    
  );
  
};

export default UserInfo;
