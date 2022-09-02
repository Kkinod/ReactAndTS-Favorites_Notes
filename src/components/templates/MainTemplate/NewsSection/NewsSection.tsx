import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../atoms/Button/Button'
import {
    ArticleWrapper,
    ContentWrapper,
    NewsSectionHeader,
    TitleWrapper,
    Wrapper,
} from './NewsSection.styles'

const API_TOKEN = 'f5a151caac91fd240d28ad1af95480'

const NewsSection = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post(
                'https://graphql.datocms.com/',
                {
                    query: `
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
                `,
                },
                {
                    headers: {
                        authorization: `Bearer ${API_TOKEN}`,
                    },
                },
            )
            .then(({ data: { data } }) => {
                setArticles(data.allArticles)
            })
            .catch(() => {
                setError('Sorry, we couldn\'t load articles for you')
            })
    })

    interface IArticles {
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
                articles.map(({ title, category, content, image }: IArticles) => (
                    <ArticleWrapper key={title}>
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
                <NewsSectionHeader>Loading...</NewsSectionHeader>
            )}
            {error ? <NewsSectionHeader>{error}</NewsSectionHeader> : null}
        </Wrapper>
    )
}

export default NewsSection
