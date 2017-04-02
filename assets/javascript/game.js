function character(name, attack, health, counter)
{
	this.name = name;
	this.baseAttack = attack;
	this.currentAttack = attack;
	this.maxHealth = health;
	this.currentHealth = health;
	this.counter = counter;

}

var chosenCharacter = null;
var chosenEnemy = null;
var numEnemiesRemaining;
var steven = new character("Steven Universe", 12, 100, 10);
var pearl = new character("Pearl", 15, 85, 8);
var amethyst = new character("Amethyst", 13, 120, 5);
var garnet = new character("Garnet", 10, 150, 4);

$(document).ready(function()
{
	

	$("#steven-data").html("<b>" + steven.name + "</b><p>Base Attack: " + steven.baseAttack 
		+ "</p><p>Health: " + steven.maxHealth + "</p>");
	$("#pearl-data").html("<b>" + pearl.name + "</b><p>Base Attack: " + pearl.baseAttack 
		+ "</p><p>Health: " + pearl.maxHealth + "</p>");
	$("#amethyst-data").html("<b>" + amethyst.name + "</b><p>Base Attack: " + amethyst.baseAttack 
		+ "</p><p>Health: " + amethyst.maxHealth + "</p>");
	$("#garnet-data").html("<b>" + garnet.name + "</b><p>Base Attack: " + garnet.baseAttack 
		+ "</p><p>Health: " + garnet.maxHealth + "</p>");
	$("#steven-enemy-data").html("<b>" + steven.name + "</b><p>Counter Attack: " 
		+ steven.counter + "</p><p>Health: " + steven.maxHealth + "</p>");
	$("#pearl-enemy-data").html("<b>" + pearl.name + "</b><p>Counter Attack: " 
		+ pearl.counter + "</p><p>Health: " + pearl.maxHealth + "</p>");
	$("#amethyst-enemy-data").html("<b>" + amethyst.name + "</b><p>Counter Attack: " 
		+ amethyst.counter + "</p><p>Health: " + amethyst.maxHealth + "</p>");
	$("#garnet-enemy-data").html("<b>" + garnet.name + "</b><p>Counter Attack: " 
		+ garnet.counter + "</p><p>Health: " + garnet.maxHealth + "</p>");
	$("#enemy-fighters").hide();
	$("#arena").hide();
	$("#attack-btn").hide();
	$("#reset-btn").hide();

	$("#garnet").click(function()
	{
		if(chosenCharacter != null)
			return;
		chosenCharacter = garnet;
		$("#character-select").hide();
		$("#enemy-fighters").show();
		$("#arena").show();
		setUpArena();
		generateEnemies();
	});

	$("#amethyst").click(function()
	{
		if(chosenCharacter != null)
			return;

		chosenCharacter = amethyst;
		$("#character-select").hide();
		$("#enemy-fighters").show();
		$("#arena").show();
		setUpArena();
		generateEnemies();
	});

	$("#pearl").click(function()
	{
		if(chosenCharacter != null)
			return;

		chosenCharacter = pearl;
		$("#character-select").hide();
		$("#enemy-fighters").show();
		$("#arena").show();
		setUpArena();
		generateEnemies();
	});

	$("#steven").click(function()
	{
		if(chosenCharacter != null)
			return;

		chosenCharacter = steven;
		$("#character-select").hide();
		$("#enemy-fighters").show();
		$("#arena").show();
		setUpArena();
		generateEnemies();
	});

	$("#garnet-enemy").click(function()
	{
		if(chosenEnemy != null)
			return;

		if($("#garnet-enemy").css("opacity") == 0.2)
			return;

		$("#attack-btn").show();
		chosenEnemy = garnet;
		// add garnet to the arena
		var arena = $("#arena");
		var newDiv;
		var newImg;
		var newData;
		newDiv = $("<div></div>");
		newDiv.attr("class", "container col-md-2 col-md-offset-1 arenaEnemy");
		newImg = $("<img></img>");
		newImg.attr("class", "characterImages");
		newImg.attr("src", "assets/images/garnet.png");
		newImg.attr("alt", garnet.name);
		newData = $("<p></p>");
		newData.attr("id", "garnet-enemy-arena-data");
		newData.html("<b>" + garnet.name + "</b><p>Counter Attack: " 
		+ garnet.counter + "</p><p>Health: " + garnet.currentHealth + "</p>");
		newDiv.append(newImg);
		newDiv.append(newData);
		arena.append(newDiv);
	});

	$("#amethyst-enemy").click(function()
	{
		if(chosenEnemy != null)
			return;

		if($("#amethyst-enemy").css("opacity") == 0.2)
			return;

		$("#attack-btn").show();
		chosenEnemy = amethyst;
		// add steven to the arena
		var arena = $("#arena");
		var newDiv;
		var newImg;
		var newData;
		newDiv = $("<div></div>");
		newDiv.attr("class", "container col-md-2 col-md-offset-1 arenaEnemy");
		newImg = $("<img></img>");
		newImg.attr("class", "characterImages");
		newImg.attr("src", "assets/images/amethyst.png");
		newImg.attr("alt", amethyst.name);
		newData = $("<p></p>");
		newData.attr("id", "amethyst-enemy-arena-data");
		newData.html("<b>" + amethyst.name + "</b><p>Counter Attack: " 
		+ amethyst.counter + "</p><p>Health: " + amethyst.currentHealth + "</p>");
		newDiv.append(newImg);
		newDiv.append(newData);
		arena.append(newDiv);
	});

	$("#pearl-enemy").click(function()
	{
		if(chosenEnemy != null)
			return;

		if($("#pearl-enemy").css("opacity") == 0.2)
			return;

		$("#attack-btn").show();
		chosenEnemy = pearl;
		// add pearl to the arena
		var arena = $("#arena");
		var newDiv;
		var newImg;
		var newData;
		newDiv = $("<div></div>");
		newDiv.attr("class", "container col-md-2 col-md-offset-1 arenaEnemy");
		newImg = $("<img></img>");
		newImg.attr("class", "characterImages");
		newImg.attr("src", "assets/images/pearl.png");
		newImg.attr("alt", pearl.name);
		newData = $("<p></p>");
		newData.attr("id", "pearl-enemy-arena-data");
		newData.html("<b>" + pearl.name + "</b><p>Counter Attack: " 
		+ pearl.counter + "</p><p>Health: " + pearl.currentHealth + "</p>");
		newDiv.append(newImg);
		newDiv.append(newData);
		arena.append(newDiv);
	});

	$("#steven-enemy").click(function()
	{
		if(chosenEnemy != null)
			return;

		if($("#steven-enemy").css("opacity") == 0.2)
			return;

		$("#attack-btn").show();
		chosenEnemy = steven;
		// add steven to the arena
		var arena = $("#arena");
		var newDiv;
		var newImg;
		var newData;
		newDiv = $("<div></div>");
		newDiv.attr("class", "container col-md-2 col-md-offset-1 arenaEnemy");
		newImg = $("<img></img>");
		newImg.attr("class", "characterImages");
		newImg.attr("src", "assets/images/steven.png");
		newImg.attr("alt", steven.name);
		newData = $("<p></p>");
		newData.attr("id", "steven-enemy-arena-data");
		newData.html("<b>" + steven.name + "</b><p>Counter Attack: " 
		+ steven.counter + "</p><p>Health: " + steven.currentHealth + "</p>");
		newDiv.append(newImg);
		newDiv.append(newData);
		arena.append(newDiv);
	});

	function generateEnemies()
	{
		numEnemiesRemaining = 3;
		switch(chosenCharacter)
		{
			case garnet:
			{
				$("#garnet-enemy").hide();
				break;
			}
			case amethyst:
			{
				$("#amethyst-enemy").hide();
				break;
			}
			case pearl:
			{
				$("#pearl-enemy").hide();
				break;
			}
			case steven:
			{
				$("#steven-enemy").hide();
				break;
			}
			default:
			{
				alert("Something bad happened!");
				break;
			}
		}
	}

	function setUpArena()
	{
		switch(chosenCharacter)
		{
			case steven:
			{
				var arena = $("#arena");
				var newDiv;
				var newImg;
				var newData;

				// add steven to the arena
				newDiv = $("<div></div>");
				newDiv.attr("class", "container col-md-2 characterStats");
				newImg = $("<img></img>");
				newImg.attr("class", "characterImages");
				newImg.attr("src", "assets/images/steven.png");
				newImg.attr("alt", steven.name);
				newData = $("<p></p>");
				newData.attr("id", "steven-arena-data");
				newData.html("<b>" + steven.name + "</b><p>Attack: " 
					+ steven.currentAttack + "</p><p>Health: " + steven.currentHealth + "</p>");
				newDiv.append(newImg);
				newDiv.append(newData);
				arena.append(newDiv);
				break;
			}

			case pearl:
			{
				var arena = $("#arena");
				var newDiv;
				var newImg;
				var newData;

				// add pearl to the arena
				newDiv = $("<div></div>");
				newDiv.attr("class", "container col-md-2 characterStats");
				newImg = $("<img></img>");
				newImg.attr("class", "characterImages");
				newImg.attr("src", "assets/images/pearl.png");
				newImg.attr("alt", pearl.name);
				newData = $("<p></p>");
				newData.attr("id", "pearl-arena-data");
				newData.html("<b>" + pearl.name + "</b><p>Attack: " 
					+ pearl.currentAttack + "</p><p>Health: " + pearl.currentHealth + "</p>");
				newDiv.append(newImg);
				newDiv.append(newData);
				arena.append(newDiv);
				break;
			}

			case amethyst:
			{
				var arena = $("#arena");
				var newDiv;
				var newImg;
				var newData;

				// add amethyst to the arena
				newDiv = $("<div></div>");
				newDiv.attr("class", "container col-md-2 characterStats");
				newImg = $("<img></img>");
				newImg.attr("class", "characterImages");
				newImg.attr("src", "assets/images/amethyst.png");
				newImg.attr("alt", amethyst.name);
				newData = $("<p></p>");
				newData.attr("id", "amethyst-arena-data");
				newData.html("<b>" + amethyst.name + "</b><p>Attack: " 
					+ amethyst.currentAttack + "</p><p>Health: " + amethyst.currentHealth + "</p>");
				newDiv.append(newImg);
				newDiv.append(newData);
				arena.append(newDiv);
				break;
			}

			case garnet:
			{
				var arena = $("#arena");
				var newDiv;
				var newImg;
				var newData;

				// add garnet to the arena
				newDiv = $("<div></div>");
				newDiv.attr("class", "container col-md-2 characterStats");
				newImg = $("<img></img>");
				newImg.attr("class", "characterImages");
				newImg.attr("src", "assets/images/garnet.png");
				newImg.attr("alt", garnet.name);
				newData = $("<p></p>");
				newData.attr("id", "garnet-arena-data");
				newData.html("<b>" + garnet.name + "</b><p>Attack: " 
					+ garnet.currentAttack + "</p><p>Health: " + garnet.currentHealth + "</p>");
				newDiv.append(newImg);
				newDiv.append(newData);
				arena.append(newDiv);
				break;
			}

			default:
			{
				alert("An error has occured");
			}
		}
	}
});

function parseAttack()
{
	if(chosenEnemy == null)
		return;

	if(chosenCharacter.currentHealth == 0)
		return;

	// do the damage
	chosenEnemy.currentHealth -= chosenCharacter.currentAttack;
	chosenCharacter.currentHealth -= chosenEnemy.counter;
	if(chosenEnemy.currentHealth < 0)
		chosenEnemy.currentHealth = 0;

	if(chosenCharacter.currentHealth < 0)
		chosenCharacter.currentHealth = 0;

	// update the stats
	// update them first so the player can see if one of the fighters did hit 0 hp
	updateDisplay();
		
	// check for win/loss
	// check for loss first, because if you lose, then it doesn't matter if you beat your opponent
	if(chosenCharacter.currentHealth == 0)
	{
		alert("Oh no! You have been defeated. Better luck next time.");
		$("#reset-btn").show();
	}

	else if(chosenEnemy.currentHealth == 0)
	{
		numEnemiesRemaining--;
		chosenCharacter.currentAttack *= 2;
		updateDisplay();
		if(numEnemiesRemaining == 0)
		{
			alert("Congratulations! You Win!");
			$("#reset-btn").show();
		}

		else
		{
			alert("Congratulations! You have beaten " + chosenEnemy.name + ". Please choose another enemy to fight.");
			$(".arenaEnemy").remove();
		}

		switch(chosenEnemy)
		{
			case garnet:
			{
				$("#garnet-enemy").css("opacity","0.2");
				break;
			}

			case amethyst:
			{
				$("#amethyst-enemy").css("opacity","0.2");
				break;
			}

			case pearl:
			{
				$("#pearl-enemy").css("opacity","0.2");
				break;
			}

			case steven:
			{
				$("#steven-enemy").css("opacity","0.2");
				break;
			}
		}

		chosenEnemy = null;
	}
}

function updateDisplay()
{
	switch(chosenCharacter)
	{
		case garnet:
		{
			$("#garnet-arena-data").html("<b>" + garnet.name + "</b><p>Attack: " 
				+ garnet.currentAttack + "</p><p>Health: " + garnet.currentHealth + "</p>");
			break;
		}

		case amethyst:
		{
			$("#amethyst-arena-data").html("<b>" + amethyst.name + "</b><p>Attack: " 
				+ amethyst.currentAttack + "</p><p>Health: " + amethyst.currentHealth + "</p>");
			break;
		}

		case pearl:
		{
			$("#pearl-arena-data").html("<b>" + pearl.name + "</b><p>Attack: " 
				+ pearl.currentAttack + "</p><p>Health: " + pearl.currentHealth + "</p>");
			break;
		}

		case steven:
		{
			$("#steven-arena-data").html("<b>" + steven.name + "</b><p>Attack: " 
				+ steven.currentAttack + "</p><p>Health: " + steven.currentHealth + "</p>");
			break;
		}
	}

	switch(chosenEnemy)
	{
		case garnet:
		{
			$("#garnet-enemy-arena-data").html("<b>" + garnet.name + "</b><p>Counter Attack: " 
				+ garnet.counter + "</p><p>Health: " + garnet.currentHealth + "</p>");
			break;
		}

		case amethyst:
		{
			$("#amethyst-enemy-arena-data").html("<b>" + amethyst.name + "</b><p>Counter Attack: " 
				+ amethyst.counter + "</p><p>Health: " + amethyst.currentHealth + "</p>");
			break;
		}

		case pearl:
		{
			$("#pearl-enemy-arena-data").html("<b>" + pearl.name + "</b><p>Counter Attack: " 
				+ pearl.counter + "</p><p>Health: " + pearl.currentHealth + "</p>");
			break;
		}

		case steven:
		{
			$("#steven-enemy-arena-data").html("<b>" + steven.name + "</b><p>Counter Attack: " 
				+ steven.counter + "</p><p>Health: " + steven.currentHealth + "</p>");
			break;
		}
	}
}

function resetGame()
{
	// reset fighter data
	steven.currentHealth = steven.maxHealth;
	steven.currentAttack = steven.baseAttack;
	pearl.currentHealth = pearl.maxHealth;
	pearl.currentAttack = pearl.baseAttack;
	amethyst.currentHealth = amethyst.maxHealth;
	amethyst.currentAttack = amethyst.baseAttack;
	garnet.currentHealth = garnet.maxHealth;
	garnet.currentAttack = garnet.baseAttack;
	$("#steven-enemy").css("opacity", "1.0");
	$("#pearl-enemy").css("opacity", "1.0");
	$("#amethyst-enemy").css("opacity", "1.0");
	$("#garnet-enemy").css("opacity", "1.0");

	chosenCharacter = null;
	chosenEnemy = null;

	//reset character select
	$("#character-select").show();
	
	//reset enemy select
	$("#steven-enemy").show();
	$("#pearl-enemy").show();
	$("#amethyst-enemy").show();
	$("#garnet-enemy").show();
	$("#enemy-fighters").hide();
	
	//reset the arena
	$("#arena").children().remove();
	var arenaTitle = $("<h3></h3>");
	arenaTitle.html("Arena:");
	$("#arena").append(arenaTitle);
	$("#arena").hide();
	
	//hide the buttons
	$("#attack-btn").hide();
	$("#reset-btn").hide();
	return;
}