// Soal Nomor 1

class Animal {
    constructor(nama, _legs, _cold_blooded){
        this.nama = nama
        this._legs = 4;
        this._cold_blooded = false
    }
    
    get legs(){
      return this._legs
    }
    
    get cold_blooded() {
      return this._cold_blooded
    }
}

// Release 0

var sheep = new Animal("sheep")

console.log(sheep.nama)

console.log(sheep.legs)

console.log(sheep.cold_blooded)

// Release 1

class Ape extends Animal {
    constructor(name, _cold_blooded){
        super(name, _cold_blooded)
        this._legs = 2;
    }

    yell(){
        return console.log("Auoo")
    }
}

var sungokong = new Ape("kera sakti")

sungokong.yell()

class Frog extends Animal {
    constructor(name,_legs){
        super(name, _legs)
    }

    jump(){
        return console.log("hop hop")
    }
}

var kodok = new Frog("buduk")

kodok.jump()

// Soal Nomor 2

class Clock {
    constructor({template}) {
        this.timer;
        this.template = template;
    }

    render() {
        var date = new Date()

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours
        
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)

        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 