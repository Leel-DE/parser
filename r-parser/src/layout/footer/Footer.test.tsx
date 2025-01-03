import { render, screen } from '@testing-library/react';
import Footer from './Footer.tsx';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
    const testContent = 'Test Footer Content';

    test('renders Footer with content', () => {
        render(<Footer content={testContent} />);

        // Проверяем, что текст content отображается
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    test('renders social media icons', () => {
        render(<Footer content={testContent} />);

        const socialMediaIcons = screen.getAllByRole('link');
        expect(socialMediaIcons.length).toBe(20); // Проверяем, что 5 социальных иконок
    });

    test('renders footer links', () => {
        render(<Footer content={testContent} />);

        const footerLinks = screen.getAllByRole('link', { name: /item/i });
        expect(footerLinks.length).toBe(20); // Учитываем, что у нас 4 колонки по 5 ссылок
    });
});


