
function loadCombo(methodName,param,id,selectedvalue) {
	$.getJSON('getvalueCombo.action',{param:param,methodName:methodName}, function(data) {
		$("#" + id + "").empty();
		$("#" + id + "").append('<option></option>');	
		for (var i = 0; i < data.comboList.length; i++) {
			var check=data.comboList[i].id;
			var name=data.comboList[i].name;
			if (selectedvalue==check){
				$("#" + id + "").append('<option  value="' + check + '" selected="selected">'+ name + '</option>');	
				$("#" + id + "").select2("val", selectedvalue);
			} else {
				$("#" + id + "").append('<option value="' + check + '">'+ name + '</option>');
			}
		}
		$("#" + id + "").select2("val", selectedvalue);
		
	});
}


//Without Empty Options
function multipleListBox(methodName,param,id,selectedvalue) {
	$.getJSON('getvalueCombo.action',{param:param,methodName:methodName}, function(data) {
		$("#" + id + "").empty();
		//$("#" + id + "").append('<option></option>');	
		for (var i = 0; i < data.comboList.length; i++) {
			var check=data.comboList[i].id;
			var name=data.comboList[i].name;
			if (selectedvalue==check){
				$("#" + id + "").append('<option  value="' + check + '" selected="selected">'+ name + '</option>');	
				$("#" + id + "").select2("val", selectedvalue);
			} else {
				$("#" + id + "").append('<option value="' + check + '">'+ name + '</option>');
			}
		}
		$("#" + id + "").select2("val", selectedvalue);
		
	});
}
