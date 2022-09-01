import { Input } from '../../atoms/Input/Input'
import { SearchBarWrapper, StatusInfo } from './SearchBard.styles'

export const SearchBar = () => (
    <SearchBarWrapper>
        <StatusInfo>
            <p>Logged as:</p>
            <p>
                <strong>Teacher</strong>
            </p>
        </StatusInfo>
        <Input />
    </SearchBarWrapper>
)
