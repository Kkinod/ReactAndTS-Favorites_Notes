import Button from '../../../atoms/Button/Button'
import ViewWrapper from '../../../molecules/ViewWrapper/ViewWrapper'
import { ArticleWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles'

const NewsSection = () => {
    return (
        <Wrapper>
            <NewsSectionHeader>News feed section</NewsSectionHeader>
            <ArticleWrapper>
                <TitleWrapper>
                    <h3>Lorem ipsum 1</h3>
                    <p>Tech news</p>
                </TitleWrapper>
                <p>dolor sit amet</p>
                <Button isBig>click me</Button>
            </ArticleWrapper>
        </Wrapper>
    )
}

export default NewsSection
