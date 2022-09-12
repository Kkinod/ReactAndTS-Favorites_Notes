import DeleteButton from '../../atoms/DeleteButton/DeleteButton'
import Wrapper, { StyledAverage, StyledInfo } from './StudentsListItem.styled'

interface IUsersList {
    userData: {
        deleteWorker?: (name: string) => void
        name: string
        attendance: string
        average: string
    }
}

// const UsersListItem = ({ name, attendance = '0%', average }: IUsersList) => {
const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }: IUsersList) => {
    return (
        <Wrapper>
            <StyledAverage value={average}>{average}</StyledAverage>
            <StyledInfo>
                <p>
                    {name}
                    <DeleteButton />
                </p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
        </Wrapper>
    )
}

export default StudentsListItem
