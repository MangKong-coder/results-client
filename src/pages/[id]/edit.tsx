// ANCHOR IMPORTS
import { JSX } from 'solid-js'
import { RouterParams, useRouter } from 'solid-tiny-router'
import { EditResultForm } from '../../components/EditResultForm'

interface Param extends RouterParams {
    id: string
  }

function EditResult(): JSX.Element {
    const router = useRouter<Param>()
    return (
        <>
            <EditResultForm />
        </>
    )
}

export default EditResult