import { Formik } from 'formik'
import { apiMovieMap, urlApiMovies } from '../../../../conf/api.movies'
import style from './SearchBar.module.scss'

interface InitialValues {
    query: string,
    language: 'fr-FR' | 'en-US' | 'de-DE'
}

interface SearchBarProps {
    updateSetMovies: Function
}

function SearchBar({ updateSetMovies }: SearchBarProps) {

    const initialValues: InitialValues = {
        query: '',
        language: 'fr-FR'
    }
    
    async function onSubmit(values: InitialValues, actions : any) {
        if (!values.query) return alert('Le champ doit être rempli !')
        function resetform(){
            let champForm = document.querySelector('input')
            let selectForm = document.querySelector('select')
            if(champForm?.value && selectForm?.selectedIndex) {
                actions.resetForm()
                champForm.value = ""
                selectForm.selectedIndex = 0
            }else if(champForm?.value && !selectForm?.selectedIndex) {
                actions.resetForm()
                champForm.value = ""
            }else if(!champForm?.value && selectForm?.selectedIndex) {
                actions.resetForm()
                selectForm.selectedIndex = 0
            }
        }
        const query = '?' + Object.entries(values)
            .map(([k, v]) => `${k}=${v}`)
            .join('&')

        try {
            let movies = await urlApiMovies
                .get('/search/movie' + query)
                .then(res => res.data && res.data.results)
                if(movies && movies.length) {
                    updateSetMovies(apiMovieMap(movies))
                    resetform()
                }
                else {
                    alert('Aucun résultat trouvé !')
                }
            }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting, handleBlur, handleSubmit, handleChange }) => (
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input autoComplete="off" className="mx-1" type="text" name='query' onChange={handleChange} onBlur={handleBlur} placeholder="Recherche..." />
                    <select name='language' onChange={handleChange} onBlur={handleBlur}>
                        <option value="fr-FR">France</option>
                        <option value="en-US">Anglais</option>
                        <option value="de-DE">Allemand</option>
                    </select>
                    <button type="submit" className="btn btn-small btn-success mx-1" disabled={isSubmitting}>
                        Go!
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default SearchBar