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
    initialProgress : 0,
    speed: 30,
})


Loader1.hide();
Loader2.hide();
Loader3.hide();



TimeAgo.process({
    where: 't1',
    date: new Date('2023-09-12T12:00:00'),
})




Clock.show({
    where: 'c1',
    ampm: false,
});



Happyfy.show({
    heading: "",
    content: "Welcome to Happykit.",
    footer: "",
    dimensions : ["auto","300px"],
    bg: "#008aff",
    color: "#fff",
    closeIcon: true,
    autoClose: false,
    autoCloseTime: 1,
    closeEffect: "slide",
    radius: 10,
    right: "20px",
    bottom: "20px",
    index: 9,
})



Greet.show({
    everytime: false,
});