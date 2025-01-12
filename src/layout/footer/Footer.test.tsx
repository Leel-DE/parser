import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  const testContent = '© 2025 Your Company. All rights reserved.';

  it('renders all footer links and columns correctly', () => {
    render(<Footer content={testContent} />);

    const columnTitles = ['Company', 'Resources', 'Legal', 'Social'];
    columnTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const allLinks = [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Contact',
      'Help Center',
      'Documentation',
      'API Reference',
      'Community Forum',
      'Status',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Security',
      'GDPR',
      'Facebook',
      'Twitter',
      'LinkedIn',
      'Instagram',
      'YouTube',
    ];
    allLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    const { container } = render(<Footer content={testContent} />);
    const socialIcons = container.querySelectorAll(
      '.icon-facebook, .icon-instagram, .icon-linkedin, .icon-github, .icon-youtube'
    );
    expect(socialIcons.length).toBe(5);
  });
});
