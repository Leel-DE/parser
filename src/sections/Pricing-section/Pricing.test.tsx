import { render, screen } from '@testing-library/react';
import PricingSection from './Pricing-section.tsx';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  const testContent = 'Test Pricing Content';

  test('renders Footer with content', () => {
    render(<PricingSection testContent={testContent} />);

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
