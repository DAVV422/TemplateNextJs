import { WelcomeCard } from "@/components/WelcomeCard";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <WelcomeCard />

        <section className="section">
          <h2>Getting Started</h2>
          <p>Edit <code>src/app/page.tsx</code> to start building your application.</p>
        </section>

        <section className="section">
          <h2>Quick Links</h2>
          <ul className="links-list">
            <li>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Next.js Documentation
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
                TypeScript Documentation
              </a>
            </li>
            <li>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                React Documentation
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
