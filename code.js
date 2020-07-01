/* eslint-disable no-undef, no-unused-vars */
let deviceSelector = $("#deviceSelector");
var obniz = new Obniz("6491-3254");

obniz.onconnect = async function() {
  await obniz.ble.initWait();
  obniz.ble.scan.start({ duration: 30 });
  obniz.ble.scan.onfind = function(peripheral) {
    let address = peripheral.address;
    let localName = peripheral.localName
      ? "(" + peripheral.localName + ")"
      : "";
    let optionTag = `<option value="${address}">${address}${localName}</option>`;
    deviceSelector.append(optionTag);
  };
};
