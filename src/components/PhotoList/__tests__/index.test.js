import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PhotoList from "..";

afterEach(cleanup)

describe('PhotoList is rendering', () => {
    // `it and test` either one works 
    it('renders', () => {
        render(<PhotoList />);
    });
    // snapshot test
    test('snapshot renders', () => {
        const {asFragment} = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });    
});