export function restartEventForm() {
    const eventTitle = document.querySelector('#modalTitle');
    eventTitle.value = "";
    const startDate = document.querySelector('#startDate');
    startDate.value = "";
    const finishDate = document.querySelector('#finishDate');
    finishDate.value = "";
    const eventDescription = document.querySelector('#description');
    eventDescription.value = "";
    const dateEndCheck = document.querySelector('#dateEndCheck');
    dateEndCheck.checked = false;
    const reminderCheck = document.querySelector('#reminderCheck');
    reminderCheck.checked = false;
    const eventTypeOpt = document.querySelector('#eventTypeOpt');
    eventTypeOpt.value = 'default';
    const remindMeOpt = document.querySelector('#remindMeOpt');
    remindMeOpt.value = 'default';
}
//# sourceMappingURL=restartEventForm.js.map