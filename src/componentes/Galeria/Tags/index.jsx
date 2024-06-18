import styled from 'styled-components';
import tags from './tags.json'

const TagContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 56px;
    gap: 64px;
`

const TagDiv = styled.div`
    display: flex;
    gap: 24px;
`    

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagButton = styled.button`
font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = ({setTag}) => {
    return (<TagContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        <TagDiv>
            {tags.map(tag => <TagButton key={tag.id} onClick={() => setTag(tag.tag)} >{tag.titulo}</TagButton>)}
        </TagDiv>
        
    </TagContainer>)
}

export default Tags;