// StyleHub - App logic

function requestAppointment() {
    const client = document.getElementById("clientName").value;
    const service = document.getElementById("service").value;
    const professional = document.getElementById("professional").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!client || !date || !time) {
        alert("Por favor completá todos los campos.");
        return;
    }

    const appointment = {
        id: Date.now(),
        client: client,
        serviceId: service,
        professionalId: professional,
        date: date,
        time: time,
        status: "pending"
    };

    console.log("Turno solicitado:", appointment);
    alert("Turno solicitado con éxito para el " + date + " a las " + time);
}

function confirmAppointment(id) {
    console.log("Turno confirmado:", id);
}

function cancelAppointment(id) {
    console.log("Turno cancelado:", id);
}

// HU-02: requestAppointment() implementado
// Feature: solicitud de turnos desde el formulario del cliente
// Status: completado

const ROLES = {
    admin: "admin",
    client: "client"
};

function authenticate() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        document.getElementById("loginError").style.display = "block";
        return;
    }

    const users = [
        {email: "admin@stylehub.com", password: "admin", role: ROLES.admin},
        {email: "client@stylehub.com", role: ROLES.client}
    ]

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        console.log("Access granted. Role", user.role);
        if (user.role === ROLES.admin){
            window.location.href = "admin.html";
        } else {
            window.location.href = "index.html";
        }
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}