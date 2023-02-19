import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    // baseline render component test
    test('renders', () => {
        render(<Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />)
    });

    // snapshot test
    test('matches snapshot DOM structure', () => {
        const { asFragment} = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />)
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    test('calls onClose handler', () => {
        const {getByText} = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})