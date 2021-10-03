function ParalaxItem(props) {
    return ( <div className="ParalaxItem"
        style={{
            zIndex:'-1001',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            width:props.width, 
            height:"15vw", 
            left:props.left+'vw',
            top:props.pos,
            position:'absolute'
            }}>
            <img src={props.img} style={{
            width:props.width,transform: "rotate("+props.pos+"deg)"}}/>
    </div> );
}

export default ParalaxItem;