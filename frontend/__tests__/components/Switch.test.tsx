import 'jest';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Switch from '../../src/components/common/Switch';

describe('Toggleable switch component', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(<Switch onChange={() => {}} />);
        expect(getByRole('checkbox')).toBeInTheDocument();
    });

    it('is checked by default', () => {
        const { getByRole } = render(<Switch onChange={() => {}} />);
        expect(getByRole('checkbox')).toBeChecked();
    });

    it('calls onChange when clicked', () => {
        const handleChange = jest.fn();
        const { getByRole } = render(<Switch onChange={handleChange} />);
        fireEvent.click(getByRole('checkbox'));
        expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('toggles checked state when clicked twice', () => {
        const { getByRole } = render(<Switch onChange={() => {}} />);
        const checkbox = getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
});