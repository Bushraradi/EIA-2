var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var body = document.body;
        var div0 = document.querySelector("#div0");
        var div1 = document.querySelector("#div1");
        var button = document.querySelector("button");
        document.addEventListener("mousemove", setInfoBox);
        //Eventlistener an document, body und die divs gepackt
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        button.addEventListener("click", customEvent);
        document.addEventListener("petTheCat", logInfo);
    }
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        var span = document.querySelector("span");
        var offset = 10;
        span.style.left = (x + offset) + "px";
        span.style.top = (y + offset) + "px";
        span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target: " + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customEvent(_event) {
        var button = _event.target;
        // bubbles sorgt dafür, dass das Customevent im Dom Tree aufsteigt
        var newEvent = new CustomEvent("petTheCat", { bubbles: true });
        button.dispatchEvent(newEvent);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map