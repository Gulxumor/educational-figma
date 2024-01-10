import Main from "../components/Main/index.jsx";
import Header from "../components/Header/index.jsx";
import Navbar from "../components/Navbar/index.jsx";
import Section from "../components/Section/index.jsx";
import Yellow from "../components/Yellow/index.jsx";
import Images from "../components/Images/index.jsx";
import Customers from "../components/Customers/index.jsx";
import Ready from "../components/Ready/index.jsx";
import Footer from "../components/Footer/index.jsx";

export const navbar = [
  { id: 1, element: <Navbar /> },
  { id: 2, element: <Header /> },
  { id: 3, element: <Section /> },
  { id: 4, element: <Main /> },
  { id: 5, element: <Yellow /> },
  { id: 6, element: <Images /> },
  { id: 7, element: <Customers /> },
  { id: 8, element: <Ready /> },
  { id: 9, element: <Footer /> },
];
