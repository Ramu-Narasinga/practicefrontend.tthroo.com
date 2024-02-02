import React, { useEffect } from 'react';
import Header from '../Shared/Header';
import { Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {


  const navigate = useNavigate();

  useEffect(() => {
    navigate('/practice');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Practice Coding" />
      <Outlet />
    </>
  )
}

export default Dashboard;