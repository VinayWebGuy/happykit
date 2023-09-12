Loader1.show({
    where: "l1",
    dimensions: ["50px", "50px"],
    color: "#008aff",
    stroke: 5,
    duration: 7
});


Loader2.show({
    where: "l2",
    dimensions: ["50px", "80px"],
    colors: ["#212121", "#0f0", "#ccc"],
    initialSpeed: 5
})

Loader3.show({
    where: "l3",
    dimensions: ["10px", "200px"],
    color: "#00f",
    loadingColor: "#f00",
    // initialProgress : 0,
    speed: 30,
})


Loader1.hide();
Loader2.hide();
Loader3.hide();