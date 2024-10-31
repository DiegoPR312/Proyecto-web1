document.addEventListener('DOMContentLoaded', function() {
    const moduleContent = document.getElementById('moduleContent');
    const navLinks = document.querySelectorAll('.sidebar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            loadModule(this.dataset.module);
        });
    });

    function loadModule(module) {
        let content = '';
        switch(module) {
            case 'students':
                content = generateStudentModule();
                break;
            case 'courses':
                content = generateCourseModule();
                break;
            case 'teachers':
                content = generateTeacherModule();
                break;
        }
        moduleContent.innerHTML = content;
        addEventListeners(module);
    }

    function generateStudentModule() {
        return `
            <div class="module-header">
                <h2>Gestión de Alumnos</h2>
                <button onclick="openAddStudentForm()">Registrar Alumno</button>
            </div>
            <div class="filter-section">
                <label for="grade-filter">Filtrar por grado:</label>
                <select id="grade-filter">
                    <option value="all">Todos</option>
                    <option value="1ro">1ro</option>
                    <option value="2do">2do</option>
                    <option value="3ro">3ro</option>
                    <option value="4to">4to</option>
                    <option value="5to">5to</option>
                </select>
            </div>
            <table id="studentsTable">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>DNI</th>
                        <th>Grado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Datos de estudiantes se cargarán aquí -->
                </tbody>
            </table>
        `;
    }

    function generateCourseModule() {
        return `
            <div class="module-header">
                <h2>Gestión de Cursos</h2>
                <button onclick="openAddCourseForm()">Añadir Curso</button>
            </div>
            <div class="filter-section">
                <label for="grade-filter">Filtrar por grado:</label>
                <select id="grade-filter">
                    <option value="all">Todos</option>
                    <option value="1ro">1ro</option>
                    <option value="2do">2do</option>
                    <option value="3ro">3ro</option>
                    <option value="4to">4to</option>
                    <option value="5to">5to</option>
                </select>
            </div>
            <table id="coursesTable">
                <thead>
                    <tr>
                        <th>Nombre del Curso</th>
                        <th>Grado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Datos de cursos se cargarán aquí -->
                </tbody>
            </table>
        `;
    }

    function generateTeacherModule() {
        return `
            <div class="module-header">
                <h2>Gestión de Profesores</h2>
                <button onclick="openAddTeacherForm()">Agregar Profesor</button>
            </div>
            <table id="teachersTable">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>DNI</th>
                        <th>Correo Electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Datos de profesores se cargarán aquí -->
                </tbody>
            </table>
        `;
    }

    function addEventListeners(module) {
        const gradeFilter = document.getElementById('grade-filter');
        if (gradeFilter) {
            gradeFilter.addEventListener('change', function() {
                
            });
        }
    }

    
    loadModule('students');
});


function openAddStudentForm() {
    alert('Abrir formulario para agregar estudiante');
    
}

function openAddCourseForm() {
    alert('Abrir formulario para agregar curso');
    
}

function openAddTeacherForm() {
    alert('Abrir formulario para agregar profesor');
    
}


function editStudent(id) {
    alert('Editar estudiante con ID: ' + id);
    
}

function deleteStudent(id) {
    alert('Eliminar estudiante con ID: ' + id);
    
}

function editCourse(id) {
    alert('Editar curso con ID: ' + id);
    
}

function deleteCourse(id) {
    alert('Eliminar curso con ID: ' + id);
    
}

function editTeacher(id) {
    alert('Editar profesor con ID: ' + id);
    
}

function deleteTeacher(id) {
    alert('Eliminar profesor con ID: ' + id);
    
}