class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h

        this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			fill(255)
			//rect(0,0,this.w, this.h);
            imageMode(CENTER)
			image(this.image,0,0,this.w,this.h);
			pop()
			
	}

}