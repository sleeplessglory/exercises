function ProfilePicture(){
    const imageUrl = './src/assets/How+Big,+How+Blue,+How+Beautiful+promo1.jpg';

    const handleClick = (e) => e.target.style.visibility="hidden";
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture;