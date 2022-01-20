// ANCHOR SOLID IMPORTS
import { JSX } from 'solid-js'

// ANCHOR COMPONENTS
import { CreateResultForm } from '../components/CreateResultForm'

export default function CreateResultPage(): JSX.Element {
    return (
        <h1>
            <CreateResultForm />
        </h1>
    )
}