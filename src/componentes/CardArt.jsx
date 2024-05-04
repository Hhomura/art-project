import './cardart.css'

export default (({titulo, descricao, url}) =>{
    return(
        <div className='container_card'>
            
            <div className='card_img'>
                <img src={url} alt="" />
            </div>

            <div className='card_txt'>
                <h2>{titulo}</h2>
                <span>{descricao}</span>
            </div>
        </div>
    )
})