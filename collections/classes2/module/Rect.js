class Rect {

    constructor(x, y, h, w) {

        this.p = {
            x: 0,
            y: 0,
            h: 0,
            w: 0,
            mousex: 0,
            mousey: 0

        }
        this.setup(x, y, h, w)

    }
    setup(x, y, h, w) {
        this.p.x = x
        this.p.y = y
        this.p.h = h
        this.p.w = w
    }


    draw() {

        rect(this.p.x, this.p.y, this.p.h, this.p.w)

    }

    mousedrag(mousex, mousey) {

        if (mousex > this.p.x && mousex < this.p.w + this.p.x) {
            if (mousey > this.p.y && mousey < this.p.h + this.p.y) {
                this.p.x = mousex - this.p.w / 2
                this.p.y = mousey - this.p.h / 2
            }
        }




    }
}