# Happykit
Happykit - A Single Library to make you **Happy**.

### What is Happykit?
It is a library created with javascript (jQuery) to make you work more efficient, now there is no need to write typical codes again and again. You can simply integrate **Happykit** to your project. This library is created by **[Vinay](https://thewebsoul.com)**.
***
### Features of Happykit
`Loaders`  Can add Loading Animation very easily. Three types of Loader.

`TimeAgo` Can display time in ago format i.e. 5 mins ago, 6 days ago etc.

`Clock` Can display live working clock.

`Happyfy` Can display notifications

`Greet` Can show a processing animation on start. 
***

### How to use Happykit?
You can use the Happykit library very easily by follwing these steps
- Add latest jQuery and FontAwesome CDN.
- Add **happykit.css** and **happykit.js**.
- Now you are ready to go.

***

### Syntax
You can customize the things by your own.

`Loader1`
```
Loader1.show({
    where: "l1",
    dimensions: ["50px", "50px"],
    color: "#008aff",
    stroke: 5,
    duration: 7
});
```

`Loader2`
```
Loader2.show({
    where: "l2",
    dimensions: ["50px", "80px"],
    colors: ["#212121", "#0f0", "#ccc"],
    initialSpeed: 5
})
```

`Loader3`
```
Loader3.show({
    where: "l3",
    dimensions: ["10px", "200px"],
    color: "#00f",
    loadingColor: "#f00",
    initialProgress : 0,
    speed: 30,
})
```

`Hide Loader`
```
Loader1.hide();
Loader2.hide();
Loader3.hide();
```

`TImeAgo`
```
TimeAgo.process({
    where: 't1',
    date: new Date('2023-09-12T12:00:00'),
})
```

`Clock`
```
Clock.show({
    where: 'c1',
    ampm: false,
});
```

`Happyfy`
```
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
```

`Greet`
```
Greet.show({
    everytime: false,
});
```


*To contact me you can mail me at vinaywebguy@gmail.com*