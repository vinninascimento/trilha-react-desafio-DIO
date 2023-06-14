import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://picsum.photos/600/150" alt="Imagem relacionada à postagem." />
      <Content>
        <UserInfo>
          <UserPicture src="https://picsum.photos/100/100" alt="Foto do autor da postagem." />
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Há 2 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis sunt modi saepe! Dolores dolorem quisquam deleniti, iusto beatae voluptatibus ab harum quos tenetur, sunt ipsam in maiores enim suscipit...<strong> Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 13
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }