export const metadata = {
  title: 'Button Counter',
  description: 'Simple Button Counter app for assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}