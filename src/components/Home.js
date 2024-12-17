
const Home = ({ onGame }) => {

    return (
            <div className="home">
                <div className="title">TYPING SPEED CHECK APPLICATION</div>
                <div className="author">
                    Coding & <br />
                    Design by Ijaj Jaman
                </div>
                <button onClick={ () => onGame('start') } className='btnPlay'>Start Typing</button>
            </div>
    );
}
export default Home;