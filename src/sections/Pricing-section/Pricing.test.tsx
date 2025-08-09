import { render, screen } from '@testing-library/react';
import PricingSection from './Pricing-section.tsx';
import '@testing-library/jest-dom';

describe('PricingSection', () => {
  const testContent = 'Test Pricing Content';

  test('renders PricingSection with title', () => {
    render(<PricingSection title={testContent} />);
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(<PricingSection title={testContent} />);
    expect(
      screen.getByText(
        /Choose an affordable plan that’s packed with the best features/i
      )
    ).toBeInTheDocument();
  });

  test('renders three PricingCard components', () => {
    render(<PricingSection title={testContent} />);
    // The PricingCard renders a label prop as text
    const cards = screen.getAllByText('label');
    expect(cards.length).toBe(3);
  });
});
