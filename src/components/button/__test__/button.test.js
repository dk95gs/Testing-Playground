import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import {render, cleanup} from '@testing-library/react';
import reactTestRender from 'react-test-renderer';

import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
})

it("renders button correctly", () =>{
    const {getByTestId} = render(<Button name="Hello"/>);
    expect(getByTestId('button')).toHaveTextContent("Hello");
})


it("renders button correctly", () =>{
    const {getByTestId} = render(<Button name="Good Bye"/>);
    expect(getByTestId('button')).toHaveTextContent("Good Bye");
})

it("matches snapshop", () =>{
    const tree = reactTestRender.create(<Button name="Hello"/>).toJSON();
    expect(tree).toMatchSnapshot();
})
