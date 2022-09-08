import React, { useState, useEffect } from 'react'
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
} from './SearchBard.styles'

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([])
    const { findStudents } = useStudents()

    interface IInputValue {
        inputValue: string
    }

    const getMatchingStudents = debounce(async ({ inputValue }) => {
        const { students } = await findStudents(inputValue)
        setMatchingStudents(students)
    }, 500)

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
    } = useCombobox({
        items: matchingStudents,
        onInputValueChange: getMatchingStudents,
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
