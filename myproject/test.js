
console.log("cal is begining!!!");
var start_time=new Date().getTime();

var jsonfile=require("../common/jsonfile.js");
var conf=jsonfile.read_json_file("./data/json/configuration.json");

if(conf.service=="XX")
{
	var change=require("./change_data_from_xx_to_sx.js");	
	change.chang_all_xx_related_info_to_sx();		
	console.log("from XX to SX is done !!!  Please be noted that This is XX run!!!!");
}


var temp1=require("./guide_profile_cal.js");
var m=temp1.guide_profile_cal();
console.log("guide_profile_cal is done!!!");


var temp2=require("./ATO_driving_profile_cal.js");
var m=temp2.ATO_driving_profile_cal();
console.log("ATO_driving_profile_cal is done!!!");


var temp3=require("./safety_brake_dis_profile_cal.js");
var m=temp3.safety_brake_dis_profile_cal();
console.log("safety_brake_dis_profile_cal is done!!!");
 

var temp4=require("./headway_array_cal.js");
var m=temp4.headway_array_cal();
console.log("headway_array_cal is done!!!");


var temp5=require("./IATP_headway_array_cal.js");
var m=temp5.IATP_headway_array_cal(); 
console.log("IATP_headway_array_cal is done!!!");


var temp6=require("./system_performance_cal.js");
var m=temp6.get_final_system_performance_result(); 
console.log("get_final_system_performance_result is done!!!");


var temp7=require("./cal_inter_station.js");
var m=temp7.cal_inter_station(); 
console.log("cal_inter_station is done!!!");


var end_time=new Date().getTime();
var dis_time=end_time-start_time;
console.log("this time is running "+ dis_time + " ms");


