import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import { useCombobox } from 'downshift'
import { useStudents } from '../../../hooks/useStudents'
import { Input } from '../../atoms/Input/Input'
import {
    SearchResultsItem,
    SearchBarWrapper,
    SearchResults,
    SearchWrapper,
    StatusInfo,
} from './SearchBar.styles'

interface IInputValue {
    inputValue: string | number | undefined
}

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([])
    const { findStudents } = useStudents()

    // BŁĄD Z WYŚWIETLANIE LISTY, zwrot z axiosa 404
    const getMatchingStudents = debounce(async ({ inputValue }) => {
        const { students } = await findStudents(inputValue)

        setMatchingStudents(students)
    }, 500)

    // ANY TYPE !!!!
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
        itemToString: (item: any) => (item ? item.name : ''),
    })

    // ANY TYPE!!!!!
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
                        matchingStudents.map((item: any, index) => (
                            <SearchResultsItem
                                isHighlighted={highlightedIndex === index}
                                {...getItemProps({ item, index } as any)}
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
