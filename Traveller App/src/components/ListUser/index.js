import { ListUser as ListUserDiv } from './styles'
import CardUser from '../CardUser'

const ListUser = ({ users = {}, setLike, likeUsers }) => {
    return (
        <ListUserDiv>
            {
                Object.keys(users).map((key) => {
                    const { address, name, ratting, imgUrl } = users[key]
                    return <CardUser
                        address={address}
                        key={`Card${key}`}
                        name={name}
                        ratting={ratting}
                        like={likeUsers[key] || false}
                        setLike={setLike}
                        imgUrl={imgUrl}
                        id={key}
                    />
                })
            }

        </ListUserDiv>
    );
}

export default ListUser