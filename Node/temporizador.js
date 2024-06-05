const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log("A tarefa 1 foi executada.");
    console.log(`Segundos: ${new Date().getSeconds()}`);
});

setTimeout(() => {
    tarefa1.cancel()
    console.log("Cancelando a tarefa 1....")
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 15;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log("A tarefa 2 foi executada.")
    console.log(`Segundos: ${new Date().getSeconds()}`);
})