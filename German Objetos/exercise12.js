class Escuela{
    static numEstudiantes = 0
    
    registrarEstudiante(){
        Escuela.numEstudiantes ++
        console.log("Estudiante registrado")
    }
    static verEstudiantesRegistrados(){
        console.log(`Hay ${this.numEstudiantes} estudiantes registrados`)
    }
}

const escuela1 = new Escuela()
escuela1.registrarEstudiante()
escuela1.registrarEstudiante()
escuela1.registrarEstudiante()
escuela1.registrarEstudiante()
Escuela.verEstudiantesRegistrados()