import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home'; // Your existing home page
import SurgeriesPage from './components/navbarpages/SurgeriesPage';
import HealthBlogPage from './components/navbarpages/HealthBlogPage';
import JoinAsDoctor from './components/navbarpages/JoinAsDoctor';
import DermatologistLahore from './components/pages/dermatologist/DermatologistLahore';
import DermatologistIslamabad from './components/pages/dermatologist/DermatologistIslamabad';
import DermatologistKarachi from './components/pages/dermatologist/DermatologistKarachi';
import GynecologistIslamabad from './components/pages/gynecologist/GynecologistIslamabad ';
import GynecologistLahore from './components/pages/gynecologist/GynecologistLahore';
import GynecologistKarachi from './components/pages/gynecologist/GynecologistKarachi';
import UrologistLahore from './components/pages/urologist/UrologistLahore';
import UrologistIslamabad from './components/pages/urologist/UrologistIslamabad';
import UrologistKarachi from './components/pages/urologist/UrologistKarachi';
import GastroenterologistLahore from './components/pages/gastroenterologist/GastroenterologistLahore';
import GastroenterologistIslamabad from './components/pages/gastroenterologist/GastroenterologistIslamabad';
import GastroenterologistKarachi from './components/pages/gastroenterologist/GastroenterologistKarachi';
import NeurologistLahore from './components/pages/neurologist/NeurologistLahore';
import NeurologistIslamabad from './components/pages/neurologist/NeurologistIslamabad';
import NeurologistKarachi from './components/pages/neurologist/NeurologistKarachi';
import ENTLahore from './components/pages/ENT/ENTLahore';
import ENTIslamabad from './components/pages/ENT/ENTIslamabad';
import ENTKarachi from './components/pages/ENT/ENTKarachi';
import PsychiatristLahore from './components/pages/psychiatrist/PsychiatristLahore';
import PsychiatristIslamabad from './components/pages/psychiatrist/PsychiatristIslamabad';
import PsychiatristKarachi from './components/pages/psychiatrist/PsychiatristKarachi';
import PediatricianLahore from './components/pages/pediatrician/PediatricianLahore';
import PediatricianIslamabad from './components/pages/pediatrician/PediatricianIslamabad';
import PediatricianKarachi from './components/pages/pediatrician/PediatricianKarachi';
import DentistLahore from './components/pages/dentist/DentistLahore';
import DentistIslamabad from './components/pages/dentist/DentistIslamabad';
import DentistKarachi from './components/pages/dentist/DentistKarachi';
import SexologistLahore from './components/pages/sexologist/SexologistLahore';
import SexologistIslamabad from './components/pages/sexologist/SexologistIslamabad';
import SexologistKarachi from './components/pages/sexologist/SexologistKarachi';
import ViewAll from './components/pages/viewallspecialties/ViewAll';
import WhiteningLahore from './components/pages/whitening/WhiteningLahore';
import WhiteningIslamabad from './components/pages/whitening/WhiteningIslamabad';
import WhiteningKarachi from './components/pages/whitening/WhiteningKarachi';
import LaserHairLahore from './components/pages/laser/LaserHairLahore';
import LaserHairIslamabad from './components/pages/laser/LaserHairIslamabad';
import LaserHairKarachi from './components/pages/laser/LaserHairKarachi';
import HydrafacialLahore from './components/pages/hydrafacial/HydrafacialLahore';
import HydrafacialIslamabad from './components/pages/hydrafacial/HydrafacialIslamabad';
import HydrafacialKarachi from './components/pages/hydrafacial/HydrafacialKarachi';
import MRILahore from './components/pages/mri/MRILahore';
import MRIIslamabad from './components/pages/mri/MRIIslamabad';
import MRIKarachi from './components/pages/mri/MRIKarachi';
import CTScanLahore from './components/pages/scan/CTScanLahore';
import CTScanIslamabad from './components/pages/scan/CTScanIslamabad';
import CTScanKarachi from './components/pages/scan/CTScanKarachi';
import TreatmentLahore from './components/pages/treatments/TreatmentLahore';
import TreatmentIslamabad from './components/pages/treatments/TreatmentIslamabad';
import TreatmentKarachi from './components/pages/treatments/TreatmentKarachi';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
          <Route path="/health-blog" element={<HealthBlogPage />} />
          <Route path="/join-as-doctor" element={<JoinAsDoctor />} />
          <Route path="/dermatologist/lahore" element={<DermatologistLahore />} />
          <Route path="/dermatologist/islamabad" element={<DermatologistIslamabad />} />
          <Route path="/dermatologist/karachi" element={<DermatologistKarachi />} />
          <Route path="/gynecologist/lahore" element={<GynecologistLahore />} />
          <Route path="/gynecologist/islamabad" element={<GynecologistIslamabad />} />
          <Route path="/gynecologist/karachi" element={<GynecologistKarachi />} />
          <Route path="/urologist/lahore" element={<UrologistLahore />} />
          <Route path="/urologist/islamabad" element={<UrologistIslamabad />} />
          <Route path="/urologist/Karachi" element={<UrologistKarachi />} />
          <Route path="/gastroenterologist/lahore" element={<GastroenterologistLahore />} />
          <Route path="/gastroenterologist/islamabad" element={<GastroenterologistIslamabad />} />
          <Route path="/gastroenterologist/karachi" element={<GastroenterologistKarachi />} />
          <Route path="/neurologist/lahore" element={<NeurologistLahore />} />
          <Route path="/neurologist/islamabd" element={<NeurologistIslamabad />} />
          <Route path="/neurologist/Karachi" element={<NeurologistKarachi />} />
          <Route path="/ENT/lahore" element={<ENTLahore />} />
          <Route path="/ENT/islamabad" element={<ENTIslamabad />} />
          <Route path="/ENT/karachi" element={<ENTKarachi />} />
          <Route path="/psychiatrist/lahore" element={<PsychiatristLahore />} />
          <Route path="/psychiatrist/islamabad" element={<PsychiatristIslamabad />} />
          <Route path="/psychiatrist/karachi" element={<PsychiatristKarachi />} />
          <Route path="/pediatrician/lahore" element={<PediatricianLahore />} />
          <Route path="/pediatrician/islamabad" element={<PediatricianIslamabad />} />
          <Route path="/pediatrician/karachi" element={<PediatricianKarachi />} />
          <Route path="/dentist/lahore" element={<DentistLahore />} />
          <Route path="/dentist/islamabad" element={<DentistIslamabad />} />
          <Route path="/dentist/karachi" element={<DentistKarachi />} />
          <Route path="/sexologist/lahore" element={<SexologistLahore />} />
          <Route path="/sexologist/islamabad" element={<SexologistIslamabad />} />
          <Route path="/sexologist/islamabad" element={<SexologistKarachi />} />
          <Route path="/viewpage" element={<ViewAll />} />
          <Route path="/whitening/lahore" element={<WhiteningLahore />} />
          <Route path="/whitening/islamabad" element={<WhiteningIslamabad />} />
          <Route path="/whitening/karachi" element={<WhiteningKarachi />} />
          <Route path="/laser/lahore" element={<LaserHairLahore/>} />
          <Route path="/laser/islamabad" element={<LaserHairIslamabad />} />
          <Route path="/laser/karachi" element={<LaserHairKarachi />} />
          <Route path="/hydrafacial/lahore" element={<HydrafacialLahore/>} />
          <Route path="/hydrafacial/islamabad" element={<HydrafacialIslamabad />} />
          <Route path="/hydrafacial/karachi" element={<HydrafacialKarachi />} />
          <Route path="/MRI/lahore" element={<MRILahore />} />
          <Route path="/MRI/islamabad" element={<MRIIslamabad />} />
          <Route path="/MRI/karachi" element={<MRIKarachi />} />
          <Route path="/scan/lahore" element={<CTScanLahore />} />
          <Route path="/scan/islamabad" element={<CTScanIslamabad />} />
          <Route path="/scan/karachi" element={<CTScanKarachi />} />
          <Route path="/treatments/lahore" element={<TreatmentLahore/>} />
          <Route path="/treatments/islamabad" element={<TreatmentIslamabad />} />
          <Route path="/treatments/karachi" element={<TreatmentKarachi />} />

          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;