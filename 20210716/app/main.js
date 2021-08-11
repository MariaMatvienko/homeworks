function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include("app/task1.js");
include("app/task2.js");
include("app/task3.js");
include("app/task4.js");
include("app/task5.js");
include("app/task6.js");
include("app/task7.js");