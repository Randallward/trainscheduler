
	

	var firebase = new Firebase("https://offdarails.firebaseio.com/");

	$('#trainList').on("submit", function() {


	var name = $('#nameinput').val().trim();
	var destination = $('#destinationinput').val().trim(); 
	var firstTrainTime = $('#firstTraininput').val().trim();
	var frequency = $('#frequencyinput').val().trim();

	// var trainIDs = [];		
	// var globalIndex = 0;	

		
	// $('#trainList').on("click", function() {

		// name = $('#nameinput').val().trim();
		// destination = $('#destinationinput').val().trim(); 
		// firstTrainTime = $('#firstTraininput').val().trim();
		// frequency = $('#frequencyinput').val().trim();

		var newTrain = {
		name: name,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	}

		var name = childSnapshot.val().name
		var destination = childSnapshot.val().destination
		var firstTrainTime = childSnapshot.val().firstTrainTime
		var frequency = childSnapshot.val().frequency 

		firebase.push(newTrain);
		

		
		$("#nameinput").val("");
		$("#destinationinput").val("");
		$("#firstTraininput").val("");
		$("#frequencyinput").val("");


		// location.reload();
		return false;
	})

	
	// $(document.body).on('click', '.remove', function(){

	// 	var num = $(this).attr('data-indexNum');
	// 	firebase.child(trainIDs[num]).remove();

		
	// 	location.reload();
	// });

		
	firebase.on("child_added", function(childsnapshot, prevChildKey){


		var name = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var firstTrainTime = childSnapshot.val().firstTrainTime;
		var frequency = childSnapshot.val().frequency; 
	
	var fTrain = moment.unix(firstTrainTime).format("MM/DD/YY");
	var trainM = moment().diff(moment.unix(firstTrainTime, 'X'), "months");
			console.log(trainM);

			var trainB = trainM * frequency;

			var trainArv

			var trainAway


	$("#display > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td>" + trainArv + "</td><td>" + trainAway + "</td><td>");		
	


	});