const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1 , bob2 , bob3 , bob4 , bob5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;




	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,30,230,20,roof_options);
    World.add(world,roof);

	var bob1_options = {
		isStatic:true
	}
	 
	bob1  = Bodies.circle(320,300,20,bob1_options)
	   	World.add(world,bob1)

		   con = Matter.Constraint.create({
			pointA:{x:200,y:200},
			 bodyB:bob1,
			 pointB:{x:0,y:0},
			 length:100,
			stiffness : 0.1
			});
			  World.add(world,con);
	


	var bob2_options = {
	    isStatic:true
	}
		 
	bob2  = Bodies.circle(360,300,20,bob2_options)
	World.add(world,bob2)

       con = Matter.Constraint.create({
		pointA:{x:290,y:300},
		 bodyB:bob2,
	 pointB:{x:0,y:0},
		 length:70,
		stiffness : 0.1
		});
	 	 World.add(world,con);

		var bob3_options = {
		isStatic:true
	}
			 
	bob3  = Bodies.circle(400,300,20,bob3_options)
	World.add(world,bob3)

	con = Matter.Constraint.create({
		pointA:{x:480,y:20},
		 bodyB:bob3,
		 pointB:{x:0,y:0},
		 length:70,
		stiffness : 0.1
		});
	 	 World.add(world,con);

	var bob4_options = {
		isStatic:true
	}
			 
	bob4  = Bodies.circle(440,300,20,bob4_options)
	World.add(world,bob4)
	
	con = Matter.Constraint.create({
		pointA:{x:480,y:20},
	 	bodyB:bob4,
		 pointB:{x:0,y:0},
		 length:70,
		stiffness : 0.1
		});
	 	 World.add(world,con);


	var bob5_options = {
		isStatic:true
	}
			 
	bob5  = Bodies.circle(480,300,20,bob5_options)
	World.add(world,bob5)

	con = Matter.Constraint.create({
		pointA:{x:480,y:20},
		 bodyB:bob5,
		 pointB:{x:0,y:0},
		 length:70,
		stiffness : 0.1
		});
	 	 World.add(world,con);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
 
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  
  //call display() to show ropes here

 

 line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y)
 line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y)
 line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y)
 line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y)
 line(con.pointA.x,con.pointA.y,bob5.position.x,bob5.position.y)


  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20)
  ellipse(bob2.position.x,bob2.position.y,20)
  ellipse(bob3.position.x,bob3.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20)
  ellipse(bob5.position.x,bob5.position.y,20)
}



//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
