function Shipment(id, location, destination, status, resources) {
  (this.id = id),
    (this.location = location),
    (this.destination = destination),
    (this.status = status),
    (this.resources = resources);
}

Shipment.prototype.updateStatusandResources = function (
  newStatus,
  newResources
) {
  (this.status = newStatus), (this.resources = newResources);
};

Shipment.prototype.assignResources = function (...resourcesArr) {
  this.resources.push(...resourcesArr);
};

const TrackingSystem = {
  shipments: [],

  updateStatus(id, updateStatus) {
    for (i in this.shipments) {
      if (id === this.shipments[i].id) {
        this.shipments[i].status = updateStatus;
      }
    }
  },

  viewShipment(id) {
    let shipmentArr = [];
    for (i in this.shipments) {
      if (id === this.shipments[i].id) {
        shipmentArr = [
          this.shipments[i].id,
          this.shipments[i].status,
          this.shipments[i].resources,
          this.shipments[i].location,
          this.shipments[i].destination,
        ];
      }
    }

    console.log(`Shipment ID: ${shipmentArr[0]}
      Status: ${shipmentArr[1]}
      Resources: ${shipmentArr[2].join(", ")}
      Location: ${shipmentArr[3]}
      Destination: ${shipmentArr[4]}`);
  },
};

const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", [
  "Driver",
  "Truck",
]);

shipment1.updateStatusandResources("delayed", ["Forklift"]);
shipment1.assignResources(["worker", "Pallets"]);

const shipment2 = new Shipment("67484", "Chicago", "Miami", "in transit", [
  "Forklift",
]);

shipment2.updateStatusandResources("in transit", ["driver"]);

TrackingSystem.shipments.push(shipment1, shipment2);
TrackingSystem.updateStatus("12345", "Delivered");

TrackingSystem.viewShipment("12345");

const newArr = [Shipment, TrackingSystem];

console.log(newArr);
