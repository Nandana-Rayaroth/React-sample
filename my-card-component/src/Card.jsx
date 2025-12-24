import reactpic from './assets/react.svg'
function Card(){
    return(
        <div className="card">
            <img src={reactpic} alt="Profile picture"></img>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make Youtube videos and play video games</p>
        </div>
    )
}

export default Card