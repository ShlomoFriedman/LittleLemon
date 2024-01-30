import React from 'react';
import './App.css';

const Main = () => {
    return (
        <><section className='app-main-hero'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Indulge your senses in a symphony of flavors as Little Lemon Restaurant brings the essence of the Mediterranean to your plate. From fresh olive oils to aromatic herbs and savory spices, our chefs meticulously craft each dish to transport you to the sun-kissed shores of the Mediterranean.</p>
                <button>Reserve a table</button>
                <img src="/hero.svg" alt="Hero Section Image"></img>
            </section>
            <section className='app-main-highlights'>
                <h1>This week specials</h1>
                <article className='meal1'>
                    <img src="/salad.svg" alt="Greek salad"></img>
                    <h3>Greek salad</h3>
                    <p>A harmonious blend of crisp greens, feta, olives, and sun-kissed tomatoes. Simply divine.</p>
                    <h4>Price: $12.90</h4>
                </article>
                <article className='meal2'>
                    <img src="/bruchetta.svg" alt="bruchetta"></img>
                    <h3>Bruchetta</h3>
                    <p>Crispy baguette slices topped with ripe tomatoes, garlic, basil, and drizzled olive oil.</p>
                    <h4>Price: $14.99</h4>
                </article>
                <article className='meal3'>
                    <img src="/lemon-dessert.svg" alt="lemon dessert"></img>
                    <h3>Lemon Dessert</h3>
                    <p>This comes straight from grandmas recipe book, every last ingredient has been sourced and authenticated.</p>
                    <h4>Price: $12.90</h4>
                </article>
                <button>Order Online</button>
            </section><section className='app-main-testimonials'>
                <div className="background-image"></div>
                <h1>What costumers say about us</h1>
                <article>
                    <img src='/Jack.svg' alt='Jack'></img>
                    <h3>Jack Milostien</h3>
                    <img src='/5-star-rating.svg' alt='5 star rating'></img>
                    <p>“Hidden gem! Exquisite Mediterranean flavors, charming ambiance. Must-try in Chicago.”</p>
                </article>
                <article>
                    <img src="/Emily.svg" alt="Emily"></img>
                    <h3>Emily Thompson</h3>
                    <img src='/5-star-rating.svg' alt='5 star rating'></img>
                    <p>“Seafood paella standout. Cozy atmosphere, prompt service. Will return for more.”</p>
                </article>
                <article>
                    <img src="/Sandra.svg" alt="sandra"></img>
                    <h3>Sandra Davis</h3>
                    <img src='/5-star-rating.svg' alt='5 star rating'></img>
                    <p>“Decent food, friendly staff. Expected more flavor variety. Nice ambiance.”</p>
                </article>
                <article>
                    <img src="/Carlos.svg" alt="carlos"></img>
                    <h3>Carlos Martinez</h3>
                    <img src='/5-star-rating.svg' alt='5 star rating'></img>
                    <p>“Exceeded expectations! Remarkable dishes, attentive staff. Cozy setting, perfect for gatherings.”</p>
                </article>
                </section><section className='about'>
                    <h1>About us</h1>
                    <img src='/FDA.svg' alt='FDA approval'></img>
                    <img src='/Chicago.svg' alt='Chicago logo'></img>
                    <p>Meet Little Lemon, a culinary dream brought to life by founders Adrian and Mario. Infusing passion and Mediterranean flair, they envisioned a restaurant where flavors transport, and every meal is a celebration. Little Lemon is more than a dining experience; it's a vibrant tapestry of Chicago charm and Mediterranean warmth. Join us on a journey curated by these visionary founders, where each dish tells a story, and every bite is a taste of their shared culinary passion.</p>
                    <img src='/Founders.svg' alt='Founders'></img>
                        </section></>
    );
}

export default Main;
