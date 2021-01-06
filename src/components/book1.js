function Book1(props){
    return(
        <div class="bookStyle">
            <h1 class="bookTitle">{props.title}</h1>
            <div class='bookInnerComps'>
                <img class="imageSize" src={props.image} alt="xyzsahsahsah"/>
                <p class="bookDesc">{props.description}</p>
            </div>
        </div>
    )
}

export default Book1;