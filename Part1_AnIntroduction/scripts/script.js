/**
 * Created by Javier on 4/5/2017.
 */

var work = function () {

    console.log("This is working as intended...");
}

var doWork = function (f) {

    console.log("starting");
    try {
        f();
    }catch(ex) {
        console.log(ex);
    }
    console.log("end");
}

doWork(work);
