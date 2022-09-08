import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { useStudents } from '../../../hooks/useStudents'
import { Input } from '../../atoms/Input/Input'
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from './SearchBard.styles'

export const SearchBar = () => {
    const [searchPhrase, setSearchPhrase] = useState('')
    const [matchingStudents, setMatchingStudents] = useState([])
    const { findStudents } = useStudents()

    // ANY TYPE!!!!!
    const getMatchingStudents = debounce(async (e: any) => {
        const { students } = await findStudents(searchPhrase)
        setMatchingStudents(students)
    }, 500)

    useEffect(() => {
        if (!searchPhrase) return
        getMatchingStudents(searchPhrase)
    }, [searchPhrase, getMatchingStudents])

    // ANY TYPE!!!!!
    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>
            <SearchWrapper>
                <Input
                    onChange={(e) => setSearchPhrase(e.target.value)}
                    value={searchPhrase}
                    name='Search'
                    id='Search'
                />
                {searchPhrase && matchingStudents.length ? (
                    <SearchResults>
                        {matchingStudents.map((student: any) => (
                            <li key={student.id}>{student.name}</li>
                        ))}
                    </SearchResults>
                ) : null}
            </SearchWrapper>
        </SearchBarWrapper>
    )
}
