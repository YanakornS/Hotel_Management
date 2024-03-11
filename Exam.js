
class Account {
  person = null;
  constructor(username, password, AccountStatus) {
    this.username = username;
    this.password = password;
    this.AccountStatus = AccountStatus;
  }

  setperson(person) {
    this.person = person;
  }

  toString() {
    return `Account: Username - ${this.username}, Status - ${this.AccountStatus}`;
  }
}

class person {
  account = null;
  Receptionist = null;
  Guest = null;
  constructor(name, address, phone, email, accountType) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.accountType = accountType;
  }
  setaccount(account) {
    this.account = account;
  }
  setReceptionist(Receptionist) {
    this.Receptionist = Receptionist;
  }
  setGuest(Guest) {
    this.Guest = Guest;
  }

  toString() {
    return `Person: Name - ${this.name}, Address - ${this.address}, Phone - ${this.phone}, Email - ${this.email}, Account Type - ${this.accountType}`;
  }
}



class Guest {
  person = null;
  RoomBooking = null;
  constructor(totalRoomBooked, name, address, phone, email, accountType) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.accountType = accountType;
    this.totalRoomBooked = totalRoomBooked;
  }
  setperson(person) {
    this.person = person;
  }
  RoomBooking(RoomBooking) {
    this.RoomBooking = RoomBooking;
  }

  toString() {
    return `Guest: Total Room Booked - ${this.totalRoomBooked}`;
  }
}

class Receptionist {
  constructor(name, address, phone, email, accountType) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.accountType = accountType;
  }

  toString() {
    return `Receptionist: Name - ${this.name}`;
  }
}

class RoomBooking {
  Notification = null;
  room = null;
  constructor(
    reservationNumber,
    startDate,
    durationDays,
    Bookingstatus,
    createBy
  ) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = Bookingstatus;
    this.createBy = createBy;
  }
  setNotification(Notification) {
    this.Notification = Notification;
  }
  setroom(room) {
    this.room = room;
  }

  toString() {
    return `Room Booking: Reservation Number - ${this.reservationNumber}, Start Date - ${this.startDate}, Duration - ${this.durationDays}, Status - ${this.status}, Created By - ${this.createBy}`;
  }
}

class Hotel {
  room = null;
  constructor(Name, location) {
    this.Name = Name;
    this.location = location;
  }
  setroom(room) {
    this.room = room;
  }

  toString() {
    return `Hotel: Name - ${this.Name}, Location - ${this.location}`;
  }
}

class Room {
  RoomBooking = null;
  constructor(roomNumber, style, Roomstatus, RoomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.Roomstatus = Roomstatus;
    this.RoomPrice = RoomPrice;
  }
  setroom(RoomBooking) {
    this.RoomBooking = RoomBooking;
  }

  toString() {
    return `Room: Number - ${this.roomNumber}, Style - ${this.style}, Status - ${this.Roomstatus}, Price - ${this.RoomPrice}`;
  }
}

class Notification {
  constructor(Notificationid, createOn, content, sender, recipient) {
    this.Notificationid = Notificationid;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }

  toString() {
    return `Notification: ID - ${this.Notificationid}, Created On - ${this.createOn}, Content - ${this.content}, Sender - ${this.sender}, Recipient - ${this.recipient}`;
  }
}



class AccountType {
  static new = new AccountType("Guest");
  static new = new AccountType("Receptionist");
}

const Guest1 = new Guest("Alice", );
const Guest2 = new Guest("Bob", );

console.log("ชื่อ:", Guest1.totalRoomBooked);
console.log("จำนวนห้องที่จองไว้ทั้งหมด:",Room.roomNumber ,Room.room);

console.log("ชื่อ:", Guest2.totalRoomBooked);
console.log("จำนวนห้องที่จองไว้ทั้งหมด:",Room.roomNumber ,RoomBooking.reservationNumber);

const receptionist1 = new Receptionist("Catherine", "");

const receptionist2 = new Receptionist("David", "");

console.log("พนักงาน 1:",receptionist2.name);
console.log("ชื่อ:", receptionist1.name);

console.log("พนักงาน 2:");
console.log("ชื่อ:", receptionist2.name);

const hotel = new Hotel("โรงเเรมติดชิว", "หัวหิน");

const room1 = new Room("1", "Double bed Sea view", "ว่าง", 2000);
const room2 = new Room("2", "Twin bed pool view", "ว่าง", 1800);
const room3 = new Room("3", "Twin bed Sea view", "ว่าง", 1800);
const room4 = new Room("4", "Double bed pool view", "ว่าง", 2000);

hotel.room = [room1, room2, room3, room4];

console.log("ชื่อโรงเเรม:", hotel.Name);
console.log("สถานที่:", hotel.location);
console.log("ห้อง:");

hotel.room.forEach((room) => {
  console.log("เลขห้อง:", room.roomNumber);
  console.log("Style:", room.style);
  console.log("สถานะห้อง:", room.Roomstatus);
  console.log("ราคา:", room.RoomPrice);
});

const BobRoomBooking = new RoomBooking(
  "999",
  "11/3/2567",
  3,
  "ห้องเต็ม",
  "Bob"
);

const selectedRoom = hotel.room.find(
  (room) => room.style === "Double bed Sea view"
);

if (selectedRoom) {
  selectedRoom.Roomstatus = "Booked";

  Guest2.RoomBooking = BobRoomBooking;

  console.log("Bob ได้ทำการจองห้องประเภท 1 Double bed Sea view สำเร็จ");
  console.log("หมายเลขการจอง:", BobRoomBooking.reservationNumber);
  console.log("วันที่จอง:", BobRoomBooking.startDate);
  console.log("จำนวนวันที่จอง:", BobRoomBooking.durationDays);
  console.log("สถานะ:", BobRoomBooking.status);
} else {
  console.log("ห้องประเภท 1 Double bed Sea view ว่างในโรงแรม");
}


const AliceRoomBooking = new RoomBooking(
  "888",
  "11/3/2567",
  5,
  "รอการยืนยัน",
  "Catherine"
);

const selectedRoomForAlice = hotel.room.find(
  (room) => room.style === "Twin bed Sea view" && room.Roomstatus === "ว่าง"
);

if (selectedRoomForAlice) {
  selectedRoomForAlice.Roomstatus = "รอการยืนยัน";

  Guest1.RoomBooking = AliceRoomBooking;

  console.log(
    "Catherine ได้ทำการจองห้องประเภท Twin bed Sea view สำหรับ Alice สำเร็จ"
  );
  console.log("หมายเลขการจอง:", AliceRoomBooking.reservationNumber);
  console.log("วันที่จอง:", AliceRoomBooking.startDate);
  console.log("จำนวนวันที่จอง:", AliceRoomBooking.durationDays);
  console.log("สถานะ:", AliceRoomBooking.status);
} else {
  console.log(
    "ห้องประเภท Twin bed Sea view ไม่พร้อมให้บริการ"
  );
}
