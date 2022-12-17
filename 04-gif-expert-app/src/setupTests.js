// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom'; Es lo que viene por defecto, se comenta porque no lo usaremos


// Enzyme aún no está disponible para react 17, por lo que usaremos un adaptador: https://github.com/wojtekmaj/enzyme-adapter-react-17
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


// Para enzyme-to-json:
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));