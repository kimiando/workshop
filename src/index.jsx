import '../assets/stylesheets/application.scss';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

// const Hello = ({ name, job }) => {
//   // console.log(props);
//   // const name = props.name;
//   // const place = props.place;
//   // const { name, place } = props;
//   return (
//     <h1>Hello {name}, Im currently in {place}</h1>
//   );
// };

// root.render(<Hello name="kimi" place="Le Wagon" />);
