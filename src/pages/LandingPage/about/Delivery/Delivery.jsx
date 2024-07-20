
function Delivery({Heading, text, Image}) {
    return(
        <div className="flex flex-col items-center justify-center">
            <img src={Image} alt="" />
            <h2>{Heading}</h2>
            <p>{text}</p>
        </div>
    );
}

export default Delivery;