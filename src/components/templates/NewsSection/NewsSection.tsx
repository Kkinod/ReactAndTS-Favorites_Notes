import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../atoms/Button/Button'
import {
    ArticleWrapper,
    ContentWrapper,
    NewsSectionHeader,
    TitleWrapper,
    Wrapper,
} from './NewsSection.styles'

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `

const NewsSection = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post(
                'https://graphql.datocms.com/',
                {
                    query,
                },
                {
                    headers: {
                        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
                    },
                },
            )
            .then(({ data: { data } }) => {
                setArticles(data.allArticles)
            })
            .catch(() => {
                setError('Sorry, we couldn\'t load articles for you')
            })
    }, [])

    interface IArticles {
        id: string
        title: string
        category: string
        content: string
        image?: {
            url: string
        }
    }

    return (
        <Wrapper>
            <NewsSectionHeader>News feed section</NewsSectionHeader>
            {articles.length > 0 ? (
                articles.map(({ id, title, category, content, image }: IArticles) => (
                    <ArticleWrapper key={id}>
                        <TitleWrapper>
                            <h3>{title}</h3>
                            <p>{category}</p>
                        </TitleWrapper>
                        <ContentWrapper>
                            <p>{content}</p>
                            {image ? <img src={image.url} alt='article_image' /> : null}
                        </ContentWrapper>
                        <Button isBig>click me</Button>
                    </ArticleWrapper>
                ))
            ) : (
                <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
            )}
        </Wrapper>
    )
}

export default NewsSection
