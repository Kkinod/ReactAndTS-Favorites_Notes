import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import { useCombobox } from 'downshift'
import { useStudents } from '../../../hooks/useStudents'
import { Input } from '../../atoms/Input/Input'
import { IUsersList } from '../../../mocks/handlers'
import {
    SearchResultsItem,
    SearchBarWrapper,
    SearchResults,
    SearchWrapper,
    StatusInfo,
} from './SearchBar.styles'

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([])
    const { findStudents } = useStudents()

    const getMatchingStudents = debounce(async ({ inputValue }) => {
        const { students } = await findStudents(inputValue)

        setMatchingStudents(students)
    }, 500)

    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: matchingStudents,
        onInputValueChange: getMatchingStudents,
        itemToString: (item: IUsersList | null) => (item ? item.name : ''),
    })

    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>
            <SearchWrapper {...getComboboxProps()}>
                <Input {...getInputProps()} name='Search' id='Search' placeholder='Search' />
                <SearchResults
                    isVisible={isOpen && matchingStudents.length > 0}
                    {...getMenuProps()}
                    aria-label='results'
                >
                    {isOpen &&
                        matchingStudents.map((item: IUsersList, index) => (
                            <SearchResultsItem
                                isHighlighted={highlightedIndex === index}
                                {...getItemProps({ item, index })}
                                key={item.id}
                            >
                                {item.name}
                            </SearchResultsItem>
                        ))}
                </SearchResults>
            </SearchWrapper>
        </SearchBarWrapper>
    )
}
