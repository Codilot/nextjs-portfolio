import Head from '../components/Head'
import Logo from '../components/Logo'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head />
            <Logo />
            <main>
                <Hero />
                <div className="grid">
                    <a href="#" className="card">
                        <h3>Prototypes &rarr;</h3>
                        <p>
                            Coming soon: Have a look at some prototypes I've
                            built recently.
                        </p>
                    </a>

                    <a href="#" className="card">
                        <h3>Designs &rarr;</h3>
                        <p>
                            Coming soon: Learn more about my projects in graphic
                            and editiorial design.
                        </p>
                    </a>

                    <a href="https://github.com/Codilot" className="card">
                        <h3>Experiments &rarr;</h3>
                        <p>
                            I have worked on some extra-curriculum projects and
                            coding experiments. You can take a look at these on
                            my GitHub account.
                        </p>
                    </a>

                    <a href="https://github.com/Codilot" className="card">
                        <h3>Hackergarden &rarr;</h3>
                        <p>
                            I also combine tech with growing open-pollinated
                            vegetable varieties in my “hackergarden” for seed
                            saving projects.
                        </p>
                    </a>
                </div>
            </main>
            <Footer />

            <style jsx>{`
                .container {
                    min-height: 100vh;
                }

                main {
                    padding: 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: #864CFF;
                    text-decoration: none;
                }
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #864CFF;
                    border-color: #864CFF;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap');

                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: 'Montserrat', sans-serif;
                    color:  #333333;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}
