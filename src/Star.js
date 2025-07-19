import './Star.css';

function Star({ rating }) {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <span
                key={i}
                className={`fa fa-star${i <= rating ? ' checked' : ''}`}
            ></span>
        );
    }

    return (
        <>
            {stars}
        </>
    );
}

export default Star;