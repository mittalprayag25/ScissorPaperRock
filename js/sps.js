//creating a module
var app=angular.module("sps",[]);

// creating the controller
function game($scope){

	$scope.result;
	$scope.computer;
	$scope.userChoice;
	//controller function
	$scope.addPlayer=function(){
		console.log($scope.playerName);
	}
	$scope.option=function(arg){
		var val=computer(arg);
		$scope.userChoice=arg;
		if($scope.userChoice==1){
			$scope.userChoice="Scissor"
		}
		if($scope.userChoice==2){
			$scope.userChoice="Paper"
		}
		if($scope.userChoice==3){
			$scope.userChoice="Rock"
		}

		if(val[0]){$scope.result="You Won";}
		else if(!val[0]){$scope.result="You are a looser";}
		
		if(val[0]=="equal"){
			$scope.result="Here is a tie";
		}
		if(val[1]==1){
			$scope.computer="Scissor"
		}
		else if(val[1]==2){
			$scope.computer="Paper"
		}
		else{
			$scope.computer="Rock"
		}
	}
}

function computer(userResponse)
{
	var rand=(Math.floor((Math.random())*10/3.4))+1;
	var result=compare(userResponse,rand);
	return result;
}
function compare(userResponse,computerResponse)
{
	console.log("User "+userResponse);
	console.log("computer"+computerResponse);
	var winner = new Array();
	if(userResponse==1)
	{
		if(computerResponse==2){
			//winner[0] user
			winner[0]=true;
		}
		else if(computerResponse==3){
			//computer
			winner[0]=false;
		}
		else{
			// equal
			winner[0]="equal";
		}
	}

	if(userResponse==2)
	{
		if(computerResponse==1){
			//computer
			winner[0]=false;
		}
		else if(computerResponse==3){
			//user
			winner[0]=true;
		}
		else{
			// equal
			winner[0]="equal";
		}
	}

	if(userResponse==3)
	{
		if(computerResponse==1){
			//compuetr
			winner[0]=false;
		}
		else if(computerResponse==2){
			//user
			winner[0]=true;
		}
		else{
			// equal
			winner[0]="equal"
		}
	}
	winner[1]=computerResponse;
	return winner;
}