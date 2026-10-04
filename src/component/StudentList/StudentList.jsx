function StudentList(){
    const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

    return(
        students.map((oneStudent)=>
            <div key={oneStudent}>
                <ul>
                    {oneStudent !== 'Sayed Hamed' ? <li>{oneStudent}</li> : null}
                </ul>
            </div>
        )
    )
}

export default StudentList