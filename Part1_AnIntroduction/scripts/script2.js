/**
 * Created by Javier on 4/6/2017.
 */

(function () {

    var createWorker = function () {

        var workCount = 0;

        var task1 = function () {
            workCount++;
            console.log("Task1: " + workCount);
        };

        var task2 = function () {
            workCount++;
            console.log("Task2: " + workCount);
        };

        return {
            job1: task1,
            job2: task2,
        }
    };

    var worker = createWorker();

    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();
}());
