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