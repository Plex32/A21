// jkcoxson

pub fn status_packet(valid_ip: bool, registered: bool) -> String {
    let mut packet: serde_json::Value = serde_json::Value::Object(serde_json::Map::new());
    packet["validIp"] = serde_json::Value::Bool(valid_ip);
    packet["registered"] = serde_json::Value::Bool(registered);
    serde_json::to_string(&packet).unwrap()
}

pub fn upload_response(success: bool, message: &str) -> String {
    let mut packet: serde_json::Value = serde_json::Value::Object(serde_json::Map::new());
    packet["success"] = serde_json::Value::Bool(success);
    packet["message"] = serde_json::Value::String(message.to_string());
    serde_json::to_string(&packet).unwrap()
}

pub fn list_apps_response(apps: Vec<String>) -> String {
    // Apple Shortcuts requires that all lists are keys, real lists are not a thing.
    let mut packet: serde_json::Value = serde_json::Value::Object(serde_json::Map::new());
    for i in apps {
        packet[&i] = serde_json::Value::String("".to_string());
    }
    serde_json::to_string(&packet).unwrap()
}