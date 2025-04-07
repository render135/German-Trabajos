// Universidad

class Universidad {
    static numEstudiantes = 0
    static registrarEstudiante(){
        console.log("Estudiante registrado")
        Universidad.numEstudiantes ++
    } verEstudiantes(){
        console.log(`Hay ${Universidad.numEstudiantes} estudiantes registrados`)
    }
}

const Universidad1 = new Universidad()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad.registrarEstudiante()
Universidad1.verEstudiantes()
