import { useState } from 'react';
import '../assets/style/App.css';
import { CalendarRoster } from '../components/App/CalendarRoster';
import { ModalDetails } from '../components/App/ModalDetails';
import { RosterLayout } from '../components/App/RosterLayout';
import { Onboarding } from '../components/App/Swiper';
import { useEmployees } from '../hooks/useEmployees';

function App() {
  
  const { getConstructedEventList, openModal, setOpen, employeeById, getEmployeeById } = useEmployees();
  const [isBoarded, setBoarded] = useState(false);

  return (
    <div className="App" style={{ padding: 30 }}>
      {isBoarded ? (
        <RosterLayout
          calendar={
            <CalendarRoster events={getConstructedEventList} setOpen={setOpen} getEmployeeById={getEmployeeById} />
          }
          modal={
            <ModalDetails
              open={openModal}
              setOpen={setOpen}
              employeeDetails={employeeById}
            />
          }
        />
      ) : (
        <Onboarding setBoarded={setBoarded}/>
      )}
    </div>
  );
}

export default App;
