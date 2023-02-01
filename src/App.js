
import './App.css';
import MyCard from './components/MyCard';
import TourCards from './components/tour-cards/TourCards';
import NavBar from './layout/NavBar';

function App() {
  return (
    <>
     <NavBar heading="Hello"/>
     {/* <MyCard heading="Good Morning" />
     <MyCard heading="Good Afternoon" />
     <MyCard heading="Good Evening" /> */}
     <TourCards />
    </>
  );
}

export default App;
