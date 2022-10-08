import DeleteButton from '../../atoms/DeleteButton/DeleteButton'
import Wrapper, { StyledInfo } from './StudentsListItem.styled'
import { Average } from '../../atoms/Average/Average'

interface IUsersList {
    userData: {
        deleteWorker?: (name: string) => void
        name: string
        attendance: string
        average: string
    }
    onClick?: () => void
}

const StudentsListItem = ({
    userData: { average, name, attendance = '0%' },
    ...props
}: IUsersList) => {
    return (
        <Wrapper {...props}>
            <Average value={average}>{average}</Average>
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
