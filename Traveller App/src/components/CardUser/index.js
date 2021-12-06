import { CardUser as CardUserDiv, Data, Img, Like } from './styles'
import UrlEx from '../../img/peopleExemple.jpeg'
import { ReactComponent as IconHeart } from '../../img/favorite.svg'
import { ReactComponent as IconHeartBorder } from '../../img/favorite_border.svg'
import { ReactComponent as IconStar0 } from '../../img/star_0.svg'
import { ReactComponent as IconStar50 } from '../../img/star_50.svg'
import { ReactComponent as IconStar100 } from '../../img/star_100.svg'


const CardUser = ({ address, name, ratting, imgUrl, like, setLike, id }) => {
    const showStar = (ratting) => {
        const stars = []
        let rattingRest = ratting;
        for (let i = 0; i < 5; i++){
            if(rattingRest >= 2){
                stars.push(<IconStar100 key={i}/>)
                rattingRest = rattingRest-2
            }else if(rattingRest === 1){
                stars.push(<IconStar50 key={i}/>)
                rattingRest = 0
            }
            else{
                stars.push(<IconStar0 key={i}/>)
            }
        }
        return stars
    }
    return (
        <CardUserDiv>
            <Img>
                <img src={imgUrl} alt={"User Teste"} />
            </Img>
            <Data>
                <h3>{name}</h3>
                <h6>{address}</h6>
                {showStar(ratting)}
            </Data>
            <Like onClick={() => setLike(id, like)}>
                {like ?
                    <IconHeart /> :
                    <IconHeartBorder />
                }
            </Like>

        </CardUserDiv>
    );
}

export default CardUser