class Triangle { //create class 
    constructor(x, y, size, r, color) {
        this.p1 = {
            x: 0,
            y: 0

        }
        this.p2 = {
            x: 0,
            y: 0
        }
        this.p3 = {
            x: 0,
            y: 0
        }
        this.dirction = {
            x: 0,
            y: 0
        }

        this.color ={
            r : color.r,
            g :color.g,
            b :color.b
        }


        this.size = size
        this.setup(x, y)
        this.rotation = r
        this.fatma = 0

    }
    setup(x, y) {
        this.p1.x = x //instillize var
        this.p1.y = y
        this.p2.x = this.p1.x + this.size
        this.p2.y = this.p1.y
        this.p3.x = this.p1.x + this.size / 2
        this.p3.y = this.p1.y - this.size / 2
        this.dirction.x = random(-1, 2)
        this.dirction.y = random(-1, 2)
        this.dirction.x = Math.floor(this.dirction.x)
        this.dirction.y = Math.floor(this.dirction.y)
        if (this.dirction.x == 0) {
            this.dirction.x = 1
        }
        if (this.dirction.y == 0) {
            this.dirction.y = 1
        }

        
            

    }
    update() {


        let tcenterx = this.p1.x + this.size / 2
        let tcentery = this.p1.y + this.size / 4

        if (tcenterx < 20 || tcenterx > windowWidth - 20) {

            this.dirction.x *= -1

        }
        if (tcentery < 20 || tcentery > windowHeight - 20) {
            this.dirction.y *= -1

        }


        this.p1.x += this.dirction.x
        this.p2.x += this.dirction.x
        this.p3.x += this.dirction.x

        this.p1.y += this.dirction.y
        this.p2.y += this.dirction.y
        this.p3.y += this.dirction.y
        this.fatma += this.rotation

    }




    // tcenterx =s.p1.x + size / 2
    // tcentery =s.p1.y + size / 4
    // if(tcenterx <20 || tcenterx> windowWidth-20){
    // 	this.dirction.x*=-1
    // }
    // if(tcentery<20 || tcentery> windowHeight-20){
    // 	this.dirction.y*=-1
    // }






    // translate(s.p1.x + size / 2, s.p1.y - size / 4)
    // 	rotate(r)
    // 	translate(-(s.p1.x + size / 2), -(s.p1.y - size / 4))

    draw() {
        push();
        translate(this.p1.x + this.size / 2, this.p1.y - this.size / 4)
        rotate(this.fatma)
        fill (this.color.r,this.color.g,this.color.b);
        translate(-(this.p1.x + this.size / 2), -(this.p1.y - this.size / 4))
        triangle(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x,
            this.p3.y)

        pop();
        




    }


}