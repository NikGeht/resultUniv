class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    };

    constructor(name, workingHours) {
        this.name = name;
        const validWorkingHours = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

        const { from, till } = workingHours || CarService.DefaultWorkingHours;
        const isGoodTime = date => date && validWorkingHours.test(date);

        if (isGoodTime(from) && isGoodTime(till)) {
            this.workingHours = workingHours
        } else {
            this.workingHours = CarService.DefaultWorkingHours;
        }
    }

    repairCar(carName) {
        if (!carName) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
            return;
        } else {
            const currHours = new Date().getHours();
            const workingHoursFrom = Number(this.workingHours.from.split(":")[0]);
            const workingHoursTill = Number(this.workingHours.till.split(":")[0]);
            
            if (currHours >= workingHoursFrom && currHours < workingHoursTill) {
                console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`);
            } else {
                console.log(`К сожалению, мы сейчас закрыты. Приходите завтра`)
            }
            
        }
    }
}
const carService = new CarService('RepairCarNow', { from: '9:00', till: '20:00' });
carService.repairCar('BMW');