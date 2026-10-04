import './Button.css'

function Button(){
    function handleClick(){
        console.log('Button Clicked')
    }
    return(
    <p className='upload-p' onClick={handleClick}>Upload</p>
    )
}

export default Button