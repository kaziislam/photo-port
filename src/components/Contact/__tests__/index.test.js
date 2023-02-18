import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />)
    });

    // snapshot
    test('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    });
})

// <h1> tag to be `Contact me`
test('renders h1tag', () => {
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

// eslint-disable-next-line jest/no-identical-title
test('renders submit button', () => {
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit')
})