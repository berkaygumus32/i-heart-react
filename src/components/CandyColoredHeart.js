import HeartSVG from "./HeartSVG";

const colors = [
    '#8BD3E6',
    '#FF6D6A',
    '#E9EC6B',
    '#EFBE7D',
    '#B1A2CA',
    '#fffcf2'
]

const CandyColoredHeart = (props) => {
    const randomCol = colors[Math.floor(Math.random() * colors.length)]
    
    return (
        <div className='heart'>
            <div className="heart-img">
                <HeartSVG col={randomCol} />
            </div>
            <p className="heart-message">{props.msg}</p> 
        </div>
    )
}

export default CandyColoredHeart;