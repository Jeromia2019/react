import style from './studentTable.module.css'

const StudentTable = ({students}) => {
    
        return (
            <>
            <h2>Liste étudiants</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Résultat</th>
                    </tr>
                </thead>
                <StudentTableBody students={students} />
            </table>
            </>
        )
    }

    const StudentTableBody = ({students}) => {
        
        const studentsJSX = students.map(
            // key={s.id}  : Permet de donner une "key" en fonction de l'id des student
            // student={s} : (optionel) permet de changer le nom de s en student
                    s => <StudentTableRow {...s} /**/ key={s.id} student={s} /**//>
                );

            return (
                <tbody>
                    {studentsJSX}
                </tbody> 
            )
        }
    // fonction lambda => () et PAS => {return()}
    const StudentTableRow = ({firstname, lastname, result}) => (
            <>
            <tr>
                <td>{firstname} {lastname}</td>
                <td>{result !== null ? result : '/'}</td>
                {/* <td>{result !== null && result || '/'}</td> */}
            </tr>
            </>
        )


export default StudentTable;