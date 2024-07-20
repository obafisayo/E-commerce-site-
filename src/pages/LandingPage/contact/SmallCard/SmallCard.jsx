

function SmallCard({text, image}) {
    return (
        <div className='flex gap-4 items-center'>
            <img src={image} alt="" />
            <h3 className='text-[16px] font-medium'>{text}</h3>
      </div>
    );
}
export default SmallCard;