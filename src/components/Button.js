function Button(props) {
    return (
        <div className='body'>
            <button onClick={props.Gif}>Make API Call Again</button>
            <h2>Pull random gifs from Giphy</h2>
        </div>
    );
};

export default Button;