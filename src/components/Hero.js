import React from 'react'



function Hero({ children, hero }) {
    return (
        <div>
            <header className={hero}>
                {children}
            </header>
            
        </div>
    )
}

Hero.defaultProps = {
    hero : 'defaultHero'
}

export default Hero
